// @flow

import React from 'react';
import styles from './style.css';
import BlogEntry from './blog-entry';
import type { BlogPost } from './blog-entry';

const blogSlice = ({ featuredBlogPosts }: { featuredBlogPosts: Array<BlogPost> }) => {
  return (
    <section className={styles.blogSlice}>
      <div className={styles.sliceContainer}>
        <h2 className={styles.blogSliceTitle} >We’re opinionated and curious.</h2>
        <ul className={styles.blogLinkList} >
          {featuredBlogPosts.map((featuredBlogPost, ind) => (
            <BlogEntry key={ind} featuredBlogPost={featuredBlogPost} />
          ))}
        </ul>
        <a
          href="http://red-badger.com/blog"
          className={styles.blogLink}
        >
          Read our blog
        </a>
      </div>
    </section>
  );
};

export default blogSlice;
