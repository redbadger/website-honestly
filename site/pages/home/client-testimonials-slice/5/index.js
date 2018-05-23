import React from 'react';
import styles from '../common-styles.css';

const Five = () => {
  const content =
    'Working with RB is refreshing, productive and inspiring. RB makes you think differently, makes you believe the prosaic commonplace ways are behind you, enables you to challenge the norm and break the mould of convention.';
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

export default Five;
