import nock from 'nock';

import getSiteState from './index';

describe('state', () => {
  beforeAll(() => {
    process.env.HUBSPOT_BLOG_ENDPOINT = 'https://api.hubapi.com/content/api/v2/blog-posts';
    process.env.HUBSPOT_API_KEY = 'ABC';
    process.env.TWITTER_KEY = 'SECRET_KEY';
    process.env.TWITTER_SECRET = 'SECRET_KEY';
    process.env.INSTAGRAM_ACCESS_TOKEN = 'SECRET_KEY';
    process.env.BADGER_BRAIN_HOST = 'https://brain-staging.red-badger.com/graphql';
  });

  afterAll(() => {
    delete process.env.HUBSPOT_BLOG_ENDPOINT;
    delete process.env.HUBSPOT_API_KEY;
    delete process.env.TWITTER_KEY;
    delete process.env.TWITTER_SECRET;
    delete process.env.INSTAGRAM_ACCESS_TOKEN;
    delete process.env.BADGER_BRAIN_HOST;
  });

  it('returns site state', async () => {
    nock('https://api.twitter.com')
      .post(/.*oauth*/)
      .reply(200, {});

    nock('https://www.workable.com')
      .get(/.*jobs*/)
      .reply(200, {});

    nock('https://api.instagram.com')
      .get(/.*media*/)
      .reply(200, {});

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
        },
      });

    const siteState = await getSiteState();

    expect(siteState.data).toBeDefined();
  });
});
