import nock from 'nock';

import { mapDataToState, getBlogPosts, sanitiseExcerpt } from '.';

/* eslint-disable camelcase */
const fixture = () => [
  {
    absolute_url: 'https://blog.red-badger.com/2018/10/10/blog1',
    page_title: 'Blog Post 1',
    blog_author: { display_name: 'Milo' },
    post_summary: 'Cardboard is great',
    publish_date: '2017-10-02T13:07:00.000Z',
  },
  {
    absolute_url: 'https://blog.red-badger.com/2018/10/10/blog2',
    page_title: 'Blog Post 2',
    blog_author: {
      display_name: 'Roisi',
    },
    post_summary: 'React is magic',
    publish_date: '2017-10-02T13:07:00.000Z',
  },
];
/* eslint-enable camelcase */

describe('blog posts fetcher', () => {
  it('returns an array of blog posts', () => {
    const data = mapDataToState(fixture());
    expect(Array.isArray(data)).toEqual(true);
    expect(data.length).toEqual(2);
  });

  it('maps blog posts to expected data shape', () => {
    const data = mapDataToState(fixture());
    const post = data[0];
    expect(Object.keys(post).sort()).toEqual(['author', 'date', 'excerpt', 'title', 'url'].sort());
  });
});

describe('sanitiseExcerpt', () => {
  it('removes html tags from string', () => {
    const string = '<p>Hello i am a <span>string</span></p>';
    const result = 'Hello i am a string';
    expect(sanitiseExcerpt(string)).toEqual(result);
  });
});

describe('getBlogPosts', () => {
  beforeAll(() => {
    process.env.HUBSPOT_BLOG_ENDPOINT = 'https://api.hubapi.com/content/api/v2/blog-posts';
    process.env.HUBSPOT_API_KEY = 'ABC';
  });

  afterAll(() => {
    delete process.env.HUBSPOT_BLOG_ENDPOINT;
    delete process.env.HUBSPOT_API_KEY;
  });

  describe('nominal', () => {
    it('returns the right content', () => {
      nock('https://api.hubapi.com')
        .get(/.*blog-posts*/)
        .reply(200, { objects: fixture() });

      expect.assertions(2);
      return getBlogPosts(['tag']).then(data => {
        expect(Array.isArray(data)).toEqual(true);
        expect(data.length).toEqual(2);
      });
    });
  });

  describe('when the first call fails', () => {
    it('returns the right content', () => {
      nock('https://api.hubapi.com')
        .get(/.*blog-posts*/)
        .reply(500, 'ERROR');
      nock('https://api.hubapi.com')
        .get(/.*blog-posts*/)
        .reply(200, { objects: fixture() });

      expect.assertions(2);
      return getBlogPosts(['tag']).then(data => {
        expect(Array.isArray(data)).toEqual(true);
        expect(data.length).toEqual(2);
      });
    });
  });

  describe('when all call fails', () => {
    it('throws an error', done => {
      nock('https://api.hubapi.com')
        .get(/.*blog-posts*/)
        .reply(500, 'ERROR')
        .persist();
      getBlogPosts(['tag'])
        .then(() => done(new Error('Expected method to reject.')))
        .catch(error => {
          expect(error).toBeDefined();
          done();
        });
    });
  });
});
