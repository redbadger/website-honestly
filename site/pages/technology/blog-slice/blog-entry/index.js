// @flow

import React from 'react';
import moment from 'moment';
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
  date: Date,
};

const BlogEntry = ({ blogPost, altStyle }: { blogPost: BlogPost, altStyle?: boolean }) => {
  const linkAuthorStyle = [styles.linkAuthor, altStyle && styles.linkAuthorBlack];
  const linkTitleStyle = [styles.linkTitle, altStyle && styles.linkTitleBlack];
  return (
    <li>
      <a href={'//red-badger.com/blog/' + blogPost.slug} className={styles.link}>
        <div className={styles.authorTitle}>
          <span className={linkAuthorStyle}>{blogPost.author.name}</span>{' '}
          <span className={styles.publishTime}>
            {blogPost.date && moment(blogPost.date).fromNow()}
          </span>
        </div>
        <div className={styles.linkEntry}>
          <div className={linkTitleStyle}>
            <p>{blogPost.title}</p>
          </div>
          {/* eslint-disable react/no-danger */}
          <p className={styles.excerpt} dangerouslySetInnerHTML={{ __html: blogPost.excerpt }} />
          {/* eslint-enable react/no-danger */}
        </div>
      </a>
    </li>
  );
};

export default BlogEntry;
