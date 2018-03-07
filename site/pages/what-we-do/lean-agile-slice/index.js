import React from 'react';
import InlineSVG from 'svg-inline-react';
import styles from './style.css';
import smallLoopImg from './smallLoop.svg';
import largeLoopImg from './loop.svg';

const leanAgileSlice = () => {
  return (
    <section className={styles.leanAgileSlice}>
      <h2 className={styles.leanAgileHeader}>Our flexible lean and agile process</h2>
      <div className={styles.steps}>
        <div className={styles.loopContainer}>
          <InlineSVG src={smallLoopImg} className={styles.smallLoopImage} />
          <InlineSVG src={largeLoopImg} className={styles.largeLoopImage} />
          <span className={styles.wordLeft}>Innovation</span>
          <span className={styles.wordRight}>Delivery</span>
        </div>
        <h3 className={styles.stepInnovationHeader}>Innovation</h3>
        <div className={styles.step}>
          <div className={styles.marker} />
          <h4 className={styles.stepSubHeader}>Research</h4>
          <p className={styles.stepDescription}>
            We’ll understand your business and your target audience
          </p>
        </div>
        <div className={styles.step}>
          <div className={styles.marker} />
          <h4 className={styles.stepSubHeader}>Ideate</h4>
          <p className={styles.stepDescription}>
            Together we’ll define the problem to be solved and develop a range of possible solutions
          </p>
        </div>
        <div className={styles.step}>
          <div className={styles.marker} />
          <h4 className={styles.stepSubHeader}>Test</h4>
          <p className={styles.stepDescription}>
            Let’s learn fast and cheaply discard unfeasible solutions
          </p>
        </div>
        <h3 className={styles.stepDeliveryHeader}>Delivery</h3>
        <div className={styles.step}>
          <div className={styles.marker} />
          <h4 className={styles.stepSubHeader}>Backlog</h4>
          <p className={styles.stepDescription}>
            Together we’ll prioritise and validate solutions as concrete initiatives
          </p>
        </div>
        <div className={styles.step}>
          <div className={styles.marker} />
          <h4 className={styles.stepSubHeader}>Execute</h4>
          <p className={styles.stepDescription}>
            We’ll deliver great quality products and services with speed
          </p>
        </div>
        <div className={styles.step}>
          <div className={styles.marker} />
          <h4 className={styles.stepSubHeader}>Optimise</h4>
          <p className={styles.stepDescription}>
            Together we’ll constantly measure and learn to look out for new opportunities and
            improvements
          </p>
        </div>
        <div className={styles.stepPaddingBottom} />
      </div>
    </section>
  );
};

export default leanAgileSlice;
