// @flow

import React from 'react';
import styles from './style.css';

type Author = {
  bio: string,
  displayName: string,
}

export type BlogPost = {|
  urlId: string,
  categories: Array<string>,
  title: string,
  author: Author,
|}

const matchAuthorTitle = title => {
  const match = title.match(/<.+>(.*)<.+>/);
  return (match && match[1]) || title;
};

const BlogEntry = ({ featuredBlogPost }: { featuredBlogPost: BlogPost }) => {
  return (
    <li>
      <a
        href={'http://red-badger.com/blog/' + featuredBlogPost.urlId}
        className={styles.link}
      >
        <h3 className={styles.category}>{featuredBlogPost.categories[0]}</h3>
        <div className={styles.linkEntry}>
          <div className={styles.linkTitle}>
            <p>{featuredBlogPost.title}</p>
          </div>
          <div className={styles.authorTitle}>
            <p className={styles.linkAuthor}>
              {featuredBlogPost.author.displayName}
            </p>
            <p className={styles.linkAuthorTitle}>
              {matchAuthorTitle(featuredBlogPost.author.bio || '')}
            </p>
          </div>
        </div>
      </a>
    </li>
  );
};

export default BlogEntry;
