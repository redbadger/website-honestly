// @flow

import React from 'react';
import styles from './style.css';
import BlogEntry from '../../../components/blog-entry';
import type { BlogPost } from '../../../components/blog-entry';

const blogSlice = ({ blogPosts, title }: { blogPosts: Array<BlogPost>, title: string }) => {
  return (
    <section className={styles.blogSlice}>
      <div className={styles.sliceContainer}>
        <h2 className={styles.blogSliceTitle} >{title}</h2>
        <ul className={styles.blogLinkList} >
          {blogPosts.map((blogPost, ind) => (
            <BlogEntry key={ind} blogPost={blogPost} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default blogSlice;
