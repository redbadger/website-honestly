import React from 'react';
import { render } from 'enzyme';
import BlogSlice from '.';
import styles from './blog-entry/style.css';

const cheerioSelector = className => '.' + className.replace(/\s/g, '.');

describe('site/blog-slice', () => {
  it('should prepend domain name to url id', () => {
    const posts = [
      {
        title: 'A post',
        url: 'https://blog.red-badger.com/this-is-a-blog-post',
        author: 'Milo',
        excerpt: 'React is great',
        date: '2017-10-02T13:07:00.000Z',
      },
    ];
    const blogSlice = render(<BlogSlice blogPosts={posts} />);
    const className = cheerioSelector(styles.link);
    expect(blogSlice.find(className).attr('href')).toEqual(
      'https://blog.red-badger.com/this-is-a-blog-post',
    );
  });
});
