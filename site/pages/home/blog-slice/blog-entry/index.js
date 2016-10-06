import React, { PropTypes } from 'react';
import styles from './style.css';

const BlogEntry = ({
  category,
  title,
  url,
  authorName,
  authorTitle,
}) => {
  return (
    <li>
      <a
        href={url}
        className={styles.link}
      >
        <h3 className={styles.category}>{category}</h3>
        <div className={styles.linkEntry}>
          <div className={styles.linkTitle}>
            <p>{title}</p>
          </div>
          <div className={styles.authorTitle}>
            <p className={styles.linkAuthor}>
              {authorName}
            </p>
            <p className={styles.linkAuthorTitle}>
              {authorTitle}
            </p>
          </div>
        </div>
      </a>
    </li>
  );
};

BlogEntry.propTypes = {
  category: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.string,
  authorName: PropTypes.string,
  authorTitle: PropTypes.string,
};

export default BlogEntry;
