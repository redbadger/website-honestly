import React from 'react';
import styles from '../common-styles.css';

const Two = () => {
  const content =
    'Working with Red Badger has allowed the FT to see the future of our .com publishing model in a new light. Helping the FT to get the best out of our own great people, with a fresh approach to delivery and the way in which we collaborate across all disciplines has been central in building lasting change.';
  const author = '– Chief Product & Information Officer, Media';
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

export default Two;
