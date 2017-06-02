// @flow

import React from 'react';
import styles from './style.css';

type Author = {
  role: string,
  name: string,
}

export type BlogPost = {
  slug: string,
  category: string,
  title: string,
  author: Author,
}

const BlogEntry = ({ blogPost }: { blogPost: BlogPost }) => {
  return (
    <li>
      <a
        href={'//red-badger.com/blog/' + blogPost.slug}
        className={styles.link}
      >
        <h3 className={styles.category}>{blogPost.category}</h3>
        <div className={styles.linkEntry}>
          <div className={styles.linkTitle}>
            <p>{blogPost.title}</p>
          </div>
          <div className={styles.authorTitle}>
            <p className={styles.linkAuthor}>
              {blogPost.author.name}
            </p>
            <p className={styles.linkAuthorTitle}>
              {blogPost.author.role}
            </p>
          </div>
        </div>
      </a>
    </li>
  );
};

export default BlogEntry;
