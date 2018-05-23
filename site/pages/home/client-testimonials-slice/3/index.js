import React from 'react';
import styles from '../common-styles.css';

const Three = () => {
  const content =
    'It’s been great having Red Badger in the building. You guys have really fit in with our style. You have engineered a great product to a really high standard of quality that I am really proud of.';
  const author = '– Director of Technology, Retail';
  return (
    <div className={styles.contentWrapper}>
      <div className={styles.centered}>
        <div className={styles.mainWrapper}>
          <div className={styles.main}>{content}</div>
        </div>
        <div className={styles.author}>{author}</div>
      </div>
    </div>
  );
};

export default Three;
