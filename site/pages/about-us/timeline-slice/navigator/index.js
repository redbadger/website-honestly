import React from 'react';
import styles from './style.css';

const Navigator = () => {
  const scale = 0.1;
  return (
    <div className={styles.navigator}>
      <div className={styles.wrapper}>
        <ul className={styles.list}>
          <li className={styles.old}>2010</li>
          <li className={styles.old}>2011</li>
          <li className={styles.active}>2012</li>
          <li className={styles.future}>2013</li>
          <li className={styles.future}>2014</li>
          <li className={styles.future}>2015</li>
          <li className={styles.future}>2016</li>
        </ul>
        <div className={styles.fillingLine} style={{ transform: `translateX(${scale})` }} />
      </div>
    </div>
  );
};

export default Navigator;
