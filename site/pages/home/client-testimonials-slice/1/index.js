import React from 'react';
import styles from '../common-styles.css';

const One = () => {
  const content =
    'We have to get what Red Badger are providing. With highly skilled teams, they are doing what the big ' +
    "consultancies who have been in here for years just can't do or translate into meaningful outcomes. This is the " +
    "first time in two decades of banking that I've seen a transformation actually look like it might succeed.";
  const author = '– CIO, Financial Services';
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

export default One;
