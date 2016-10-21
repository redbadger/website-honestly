import React from 'react';
import styles from './style.css';

/* PNGs */
import triangleTopPNG from './PNG/triangleTop.png';
import triangleMidPNG from './PNG/triangleMid.png';
import triangleEndPNG from './PNG/triangleEnd.png';

const triangleSlice = () => {
  return (
    <section className={styles.triangleSlice}>
      <h2 className={styles.triangleHeader}>How do we get to the right thing?</h2>
      <ol className={styles.rightThingsList}>
        <li>
          <div className={styles.rightThingText}>
            <h3 className={styles.triangleThingHeader}>Vision</h3>
            <p className={styles.rightThingDescription}>
              A strong, aspirational vision is needed to keep
              the project on track; ensuring all features are
              continuously getting closer to this end goal.
            </p>
          </div>
          <img alt="Triangle Vision section" src={triangleTopPNG} />
        </li>
        <li>
          <div className={styles.rightThingText}>
            <h3 className={styles.triangleThingHeader}>Validation</h3>
            <p className={styles.rightThingDescription}>
              Validating assumptions by collecting data and
              customer research means we can prioritise work in
              the right way; ensuring features with the most
              customer value are built first.
            </p>
          </div>
          <img alt="Triangle Validation section" src={triangleMidPNG} />
        </li>
        <li>
          <div className={styles.rightThingText}>
            <h3 className={styles.triangleThingHeader}>Delivery</h3>
            <p className={styles.rightThingDescription}>
              Setting up the project in the right way increases
              efficiency and velocity, allowing the focus to be
              on feature delivery.
            </p>
          </div>
          <img alt="Triangle Delivery section" src={triangleEndPNG} />
        </li>
      </ol>
    </section>
  );
};

export default triangleSlice;
