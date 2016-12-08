import React, { PropTypes } from 'react';
import styles from './style.css';

const matchAuthorTitle = title => {
  const match = title.match(/<.+>(.*)<.+>/);
  return (match && match[1]) || title;
};

const BlogEntry = ({ featuredBlogPost }) => {
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

BlogEntry.propTypes = {
  featuredBlogPost: PropTypes.Object,
};

export default BlogEntry;
