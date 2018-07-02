import nock from 'nock';
import { mapDataToState, getBlogPosts, sanitiseExcerpt } from '.';

const fixture = () => [
  {
    urlId: 12,
    categories: ['hello'],
    title: 'Blog Post',
    author: {
      bio: '<p>Software Engineer</p>',
      displayName: 'Milo',
    },
    date: new Date('1995-12-17T03:24:00'),
  },
  {
    urlId: 20,
    categories: ['mock', 'goodbye'],
    author: {
      bio: 'Project Manager',
      displayName: 'Roisi',
    },
    date: new Date('2015-12-17T03:24:00'),
  },
];

describe('blog posts fetcher', () => {
  it('returns an array of blog posts', () => {
    const data = mapDataToState(fixture());
    expect(Array.isArray(data)).toEqual(true);
    expect(data.length).toEqual(2);
  });

  it('maps blog posts to expected data shape', () => {
    const data = mapDataToState(fixture());
    const post = data[0];
    expect(Object.keys(post).sort()).toEqual(
      ['slug', 'category', 'title', 'author', 'date', 'excerpt'].sort(),
    );
    expect(Object.keys(post.author).sort()).toEqual(['role', 'name'].sort());
  });

  it('removes html tags around author bio', () => {
    const data = mapDataToState(fixture());
    const { author } = data[0];
    expect(author.role).toEqual('Software Engineer');
  });

  it('persists bio if no html tags found', () => {
    const data = mapDataToState(fixture());
    const { author } = data[1];
    expect(author.role).toEqual('Project Manager');
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
  describe('nominal', () => {
    it('returns the right content', () => {
      nock('https://blog.red-badger.com')
        .get(/blog*/)
        .reply(200, { items: fixture() });

      expect.assertions(2);
      return getBlogPosts(['tag']).then(data => {
        expect(Array.isArray(data)).toEqual(true);
        expect(data.length).toEqual(2);
      });
    });
  });

  describe('when the first call fails', () => {
    it('returns the right content', () => {
      nock('https://blog.red-badger.com')
        .get(/blog*/)
        .reply(500, 'ERROR');
      nock('https://blog.red-badger.com')
        .get(/blog*/)
        .reply(200, { items: fixture() });

      expect.assertions(2);
      return getBlogPosts(['tag']).then(data => {
        expect(Array.isArray(data)).toEqual(true);
        expect(data.length).toEqual(2);
      });
    });
  });

  describe('when all call fails', () => {
    it('throws an error', done => {
      nock('https://blog.red-badger.com')
        .get(/blog*/)
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
