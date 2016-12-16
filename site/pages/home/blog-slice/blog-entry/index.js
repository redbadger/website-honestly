// @flow

import React from 'react';
import InlineSVG from 'svg-inline-react';
import styles from './style.css';
import arrowSVG from '../../../../../assets/images/SVG/arrow.svg';

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

const BlogEntry = ({ featuredBlogPost }: { featuredBlogPost: BlogPost }) => {
  return (
    <li>
      <a
        href={'//red-badger.com/blog/' + featuredBlogPost.slug}
        className={styles.link}
      >
        <h3 className={styles.category}>{featuredBlogPost.category}</h3>
        <div className={styles.linkEntry}>
          <div className={styles.linkTitle}>
            <p>
              {featuredBlogPost.title}
              <InlineSVG src={arrowSVG} className={styles.arrow} />
            </p>
          </div>
          <div className={styles.authorTitle}>
            <p className={styles.linkAuthor}>
              {featuredBlogPost.author.name}
            </p>
            <p className={styles.linkAuthorTitle}>
              {featuredBlogPost.author.role}
            </p>
          </div>
        </div>
      </a>
    </li>
  );
};

export default BlogEntry;
