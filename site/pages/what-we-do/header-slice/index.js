import React from 'react';
import styles from './style.css';
import arrowImg from './arrow.png';

const headerSlice = () => {
  return (
    <div className={styles.pageHeaderContainer}>
      <div className={styles.left}>
        <div className={styles.flexible}>
          <h1 className={styles.pageHeader}>
            <p>Do the</p>
            <p>right thing</p>
          </h1>
          <img role="presentation" className={styles.arrowDown} src={arrowImg} />
        </div>
        <h3 className={styles.pageSubHeader}>Innovation</h3>
      </div>
      <div className={styles.right}>
        <div className={styles.flexible}>
          <img role="presentation" className={styles.arrowUp} src={arrowImg} />
          <h1 className={styles.pageHeader}>
            <p>Do the</p>
            <p>thing right</p>
          </h1>
        </div>
        <h3 className={styles.pageSubHeader}>Delivery</h3>
      </div>
      <div className={styles.subtitle}>
        We help you bring innovative products and services to market through nimble and robust ways
        of working.
      </div>
    </div>
  );
};
export default headerSlice;
