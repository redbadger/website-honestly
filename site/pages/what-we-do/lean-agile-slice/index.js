import React from 'react';
import InlineSVG from 'svg-inline-react';
import styles from './style.css';
import loopImgSVG from './loop.svg';

const leanAgileSlice = () => {
  return (
    <section>
      <h2 className={styles.processJourneyHeader}>Our flexible lean and agile process</h2>
      <div className={styles.loopContainer}>
        <InlineSVG src={loopImgSVG} className={styles.loopImage} />
        <span className={styles.wordLeft}>Innovation</span>
        <span className={styles.wordRight}>Delivery</span>
      </div>
    </section>
  );
};

export default leanAgileSlice;
