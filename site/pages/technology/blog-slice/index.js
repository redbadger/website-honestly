// @flow

import React from 'react';
import styles from './style.css';
import BlogEntry from './blog-entry';
import type { BlogPost } from './blog-entry';

const BlogSlice = ({
  blogPosts = [],
  title,
  altStyle,
}: {
  blogPosts: Array<BlogPost>,
  title: string,
  altStyle?: boolean,
}) => {
  const sliceStyle = [styles.blogSlice, altStyle && styles.blogSliceRight].join(' ');
  const listStyle = [styles.blogLinkList, altStyle && styles.blogLinkListRight].join(' ');
  return (
    <section className={sliceStyle}>
      <div className={styles.sliceContainer}>
        <h2 className={styles.blogSliceTitle}>{title}</h2>
        <ul className={listStyle}>
          {blogPosts.map(blogPost => (
            <BlogEntry key={blogPost.slug} blogPost={blogPost} altStyle={altStyle} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default BlogSlice;
