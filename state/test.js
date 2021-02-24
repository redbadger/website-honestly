import nock from 'nock';

import getSiteState from './index';

describe('state', () => {
  beforeAll(() => {
    process.env.HUBSPOT_BLOG_ENDPOINT = 'https://api.hubapi.com/content/api/v2/blog-posts';
    process.env.HUBSPOT_API_KEY = 'ABC';
    process.env.TWITTER_KEY = 'SECRET_KEY';
    process.env.TWITTER_SECRET = 'SECRET_KEY';
    process.env.BADGER_BRAIN_HOST = 'https://brain-staging.red-badger.com/graphql';
    process.env.HUBSPOT_BLOG_AUTHORS_ENDPOINT = 'https://api.hubapi.com/blogs/v3/blog-authors';
  });

  afterAll(() => {
    delete process.env.HUBSPOT_BLOG_ENDPOINT;
    delete process.env.HUBSPOT_API_KEY;
    delete process.env.TWITTER_KEY;
    delete process.env.TWITTER_SECRET;
    delete process.env.BADGER_BRAIN_HOST;
    delete process.env.HUBSPOT_BLOG_AUTHORS_ENDPOINT;
  });

  it('returns data in the correct shape', async () => {
    nock('https://api.twitter.com')
      .post(/.*oauth*/)
      .reply(200, {});

    nock('https://api.twitter.com')
      .get(/.*statuses*/)
      .reply(200, []);

    nock('https://api.hubapi.com/')
      .get(/.*blog-posts*/)
      .times(2)
      .query(true)
      .reply(200, {});

    nock('https://brain-staging.red-badger.com')
      .post(/.*graphql*/)
      .reply(200, {
        data: {
          allEvents: [],
          allBadgers: [],
          allQnA: [],
          eventsBanner: [],
          allJobs: [],
        },
      });

    const siteState = await getSiteState();

    expect(siteState).toEqual({
      data: {
        badgerLookup: {},
        badgers: [],
        categories: [],
        eventLookup: {},
        events: [],
        eventsBanner: undefined,
        growingTrendsBlogPosts: [],
        jobLookup: {},
        jobs: [],
        qAndAs: [],
        triedAndTestedBlogPosts: [],
        tweets: [],
      },
      fetchErrors: {},
    });
  });

  it('returns fetchErros', async () => {
    nock('https://api.twitter.com')
      .post(/.*oauth*/)
      .reply(403, {});

    nock('https://api.hubapi.com/')
      .get(/.*blog-posts*/)
      .times(2)
      .query(true)
      .reply(200, {});

    nock('https://brain-staging.red-badger.com')
      .post(/.*graphql*/)
      .reply(200, {
        data: {
          allEvents: [],
          allBadgers: [],
          allQnA: [],
          eventsBanner: [],
          allJobs: [],
        },
      });

    const {
      data: { tweets },
      fetchErrors,
    } = await getSiteState();

    expect(fetchErrors).toEqual({
      tweets: 'Forbidden',
    });

    expect({ tweets }).toEqual({ tweets: [] });
  });
});
