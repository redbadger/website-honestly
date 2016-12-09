import React from 'react';
import { render } from 'enzyme';
import BlogSlice from '.';
import styles from './blog-entry/style.css';

const cheerioSelector = className => (
  '.' + className.replace(/\s/g, '.')
);

describe('site/blog-slice', () => {
  it('should render OK with empty role', () => {
    const posts = [{
      slug: 'hello',
      title: 'A post',
      author: {
        name: 'Milo',
        role: '',
      },
      categories: ['Technology'],
    }];
    const blogSlice = render(<BlogSlice featuredBlogPosts={posts} />);
    const className = cheerioSelector(styles.linkAuthorTitle);
    expect(blogSlice.find(className).text()).to.equal('');
  });

  it('should render OK with undefined role', () => {
    const posts = [{
      slug: 'hello',
      title: 'A post',
      author: {
        name: 'Milo',
        role: undefined,
      },
      categories: ['Technology'],
    }];
    const blogSlice = render(<BlogSlice featuredBlogPosts={posts} />);
    const className = cheerioSelector(styles.linkAuthorTitle);
    expect(blogSlice.find(className).text()).to.equal('');
  });

  it('should render OK with plain text role', () => {
    const posts = [{
      slug: 'hello',
      title: 'A post',
      author: {
        name: 'Milo',
        role: 'Software Engineer',
      },
      categories: ['Technology'],
    }];
    const blogSlice = render(<BlogSlice featuredBlogPosts={posts} />);
    const className = cheerioSelector(styles.linkAuthorTitle);
    expect(blogSlice.find(className).text()).to.equal('Software Engineer');
  });

  it('should prepend domain name to url id', () => {
    const posts = [{
      title: 'A post',
      slug: '2016/this-is-a-blog-post',
      author: {
        name: 'Milo',
        role: 'Software Engineer',
      },
      categories: ['Technology'],
    }];
    const blogSlice = render(<BlogSlice featuredBlogPosts={posts} />);
    const className = cheerioSelector(styles.link);
    expect(blogSlice.find(className).attr('href')).to.equal('//red-badger.com/blog/2016/this-is-a-blog-post');
  });
});
