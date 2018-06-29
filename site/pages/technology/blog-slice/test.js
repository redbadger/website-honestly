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
        slug: '2016/this-is-a-blog-post',
        author: {
          name: 'Milo',
          role: 'Software Engineer',
        },
        categories: ['Technology'],
      },
    ];
    const blogSlice = render(<BlogSlice blogPosts={posts} />);
    const className = cheerioSelector(styles.link);
    expect(blogSlice.find(className).attr('href')).toEqual(
      '//red-badger.com/blog/2016/this-is-a-blog-post',
    );
  });
});
