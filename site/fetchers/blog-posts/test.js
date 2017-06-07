import { mapDataToState } from '.';

const fixture = () => [
  {
    urlId: 12,
    categories: ['hello'],
    title: 'Blog Post',
    author: {
      bio: '<p>Software Engineer</p>',
      displayName: 'Milo',
    },
  },
  {
    urlId: 20,
    categories: ['mock', 'goodbye'],
    author: {
      bio: 'Project Manager',
      displayName: 'Roisi',
    },
  },
];

describe('featured blog posts fetcher', () => {
  it('returns an array of blog posts', () => {
    const data = mapDataToState(fixture());
    expect(Array.isArray(data)).to.equal(true);
    expect(data.length).to.equal(2);
  });

  it('maps blog posts to expected data shape', () => {
    const data = mapDataToState(fixture());
    const post = data[0];
    expect(post).to.have.all.keys('slug', 'category', 'title', 'author');
    expect(post.author).to.have.all.keys('role', 'name');
  });

  it('removes html tags around author bio', () => {
    const data = mapDataToState(fixture());
    const author = data[0].author;
    expect(author.role).to.equal('Software Engineer');
  });

  it('persists bio if no html tags found', () => {
    const data = mapDataToState(fixture());
    const author = data[1].author;
    expect(author.role).to.equal('Project Manager');
  });
});
