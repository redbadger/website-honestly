// @flow

import React from 'react';
import moment from 'moment';
import styles from './style.css';

export type BlogPost = {
  url: string,
  title: string,
  author: string,
  excerpt: string,
  date: string,
};

const BlogEntry = ({ blogPost, altStyle }: { blogPost: BlogPost, altStyle?: boolean }) => {
  const linkAuthorStyle = [styles.linkAuthor, altStyle && styles.linkAuthorBlack].join(' ');
  const linkTitleStyle = [styles.linkTitle, altStyle && styles.linkTitleBlack].join(' ');
  return (
    <li>
      <a href={blogPost.url} className={styles.link}>
        <div className={styles.authorTitle}>
          <span className={linkAuthorStyle}>{blogPost.author}</span>{' '}
          <span className={styles.publishTime}>
            {blogPost.date && moment(blogPost.date).fromNow()}
          </span>
        </div>
        <div className={styles.linkEntry}>
          <div className={linkTitleStyle}>
            <h3>{blogPost.title}</h3>
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
