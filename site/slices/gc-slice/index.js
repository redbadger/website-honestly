import React from 'react';
import styles from './style.css';
import Homepage01 from './assets/Homepage_1.jpg?min=320&max=1440&steps=6';
// import Homepage02 from './assets/Homepage_2.jpg?min=320&max=1440&steps=6';
// import Homepage03 from './assets/Homepage_3.jpg?min=320&max=1440&steps=6';
// import Homepage04 from './assets/Homepage_4.jpg?min=320&max=1440&steps=6';
// import Homepage05 from './assets/Homepage_5.jpg?min=320&max=1440&steps=6';
import Link from '../../components/link';

const GoldCoinSlice = () => (
  <div className={styles.goldCoinsContainer}>
    <div className={styles.goldCoinsContent}>
      <h2 className={styles.goldCoinsHeading}>See how we work</h2>
      <Link className={styles.goldCoinsCTA} to="experienceUs">
        Experience Red Badger
      </Link>
    </div>
    <img
      src={Homepage01}
      srcSet={Homepage01.srcSet}
      sizes="(min-width: 1440px) 1440px, 100vw"
      className={styles.goldCoinsImage}
      alt="Awards"
    />
  </div>
);

export default GoldCoinSlice;
