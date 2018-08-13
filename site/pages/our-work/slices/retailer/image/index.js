// @flow

import React from 'react';

import styles from './styles.css';
import retailerImage from './retailer.jpg';

export default function Image() {
  return (
    <div className={styles.imageWrapper}>
      <div className={styles.imageContainer}>
        <img
          src={retailerImage}
          alt="Toy shopping cart filled with fruit & veg, surrounded by key statistics "
        />
        <div className={styles.orders}>
          <div className={styles.imagePercentage}>+54%</div>
          <div className={styles.imageText}>Increased orders</div>
        </div>
        <div className={styles.visits}>
          <div className={styles.imagePercentage}>+29%</div>
          <div className={styles.imageText}>Uplift in visits</div>
        </div>
      </div>
    </div>
  );
}
