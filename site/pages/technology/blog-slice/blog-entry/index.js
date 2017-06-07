// @flow

import React from 'react';
import styles from './style.css';

type Author = {
  role: string,
  name: string,
};

export type BlogPost = {
  slug: string,
  category: string,
  title: string,
  author: Author,
  excerpt: string,
};

const BlogEntry = ({ blogPost }: { blogPost: BlogPost }) => {
  return (
    <li>
      <a href={'//red-badger.com/blog/' + blogPost.slug} className={styles.link}>
        <div className={styles.authorTitle}>
          <span className={styles.linkAuthor}>{blogPost.author.name}</span>{' '}
          <span className={styles.publishTime}>a day ago</span>
        </div>
        <div className={styles.linkEntry}>
          <div className={styles.linkTitle}>
            <p>{blogPost.title}</p>
          </div>
          <p className={styles.excerpt}>{blogPost.excerpt}</p>
        </div>
      </a>
    </li>
  );
};

export default BlogEntry;
