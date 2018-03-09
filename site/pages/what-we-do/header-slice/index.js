import React from 'react';
import styles from './style.css';
import arrowImg from './arrow.png';

const headerSlice = () => {
  return (
    <section className={styles.pageHeaderContainer}>
      <h1 className={styles.screenReaderText}>
        Cyclic diagram of doing the right thing through innovation and delivery
      </h1>
      <div className={styles.alignLeft} role="presentation">
        <div className={styles.flexible}>
          <div className={styles.pageHeader}>
            Do the<br />right thing
          </div>
          <img alt="" role="presentation" className={styles.arrowDown} src={arrowImg} />
        </div>
        <div className={styles.pageSubHeader}>Innovation</div>
      </div>
      <div className={styles.alignRight} role="presentation">
        <div className={styles.flexible}>
          <img alt="" role="presentation" className={styles.arrowUp} src={arrowImg} />
          <div className={styles.pageHeader}>
            Do the<br />thing right
          </div>
        </div>
        <div className={styles.pageSubHeader}>Delivery</div>
      </div>
      <p className={styles.subtitle}>
        We help you bring innovative products and services to market through nimble and robust ways
        of working.
      </p>
    </section>
  );
};
export default headerSlice;
