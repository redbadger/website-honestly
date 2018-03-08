import React from 'react';
import styles from './style.css';
import arrowImg from './arrow.png';

const headerSlice = () => {
  return (
    <section className={styles.pageHeaderContainer}>
      <div className={styles.left}>
        <div className={styles.flexible}>
          <h1 className={styles.pageHeader}>
            Do the<br />right thing
          </h1>
          <img
            alt="Arrow down from innovation phrase to delivery phrase."
            className={styles.arrowDown}
            src={arrowImg}
          />
        </div>
        <h3 className={styles.pageSubHeader}>Innovation</h3>
      </div>
      <div className={styles.right}>
        <div className={styles.flexible}>
          <img
            alt="Arrow back up from delivery phrase to innovation phrase."
            className={styles.arrowUp}
            src={arrowImg}
          />
          <h1 className={styles.pageHeader}>
            Do the<br />thing right
          </h1>
        </div>
        <h3 className={styles.pageSubHeader}>Delivery</h3>
      </div>
      <p className={styles.subtitle}>
        We help you bring innovative products and services to market through nimble and robust ways
        of working.
      </p>
    </section>
  );
};
export default headerSlice;
