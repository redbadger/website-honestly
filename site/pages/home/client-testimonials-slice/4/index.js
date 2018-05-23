import React from 'react';
import styles from './style.css';

const Four = () => {
  const contentPart1 = 'Exciting, refreshing,';
  const contentPart2 = 'positive & pacey.';
  const author = '– Customer Experience Director, Retail';
  return (
    <div className={styles.contentWrapper}>
      <div className={styles.centered}>
        <div className={styles.mainWrapper}>
          <div className={styles.main}>
            {contentPart1}
            <br />
            {contentPart2}
          </div>
        </div>
        <div className={styles.author}>{author}</div>
      </div>
    </div>
  );
};

export default Four;
