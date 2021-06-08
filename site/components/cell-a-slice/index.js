// @flow
import * as React from 'react';

import styles from './style.css';
import image from './image.png';

const CellASlice = () => {
  return (
    <div className={`${styles.CellASliceWrapper}`}>
      <div className={styles.CellASliceContent}>
        <div className={styles.CellASlice}>
          <div className={styles.CellASliceText}>
            <h4 className={styles.CellASliceHeading}>
              Are you delivering seamless customer experiences?
            </h4>
            <p>
              With lockdown easing and customers returning to venues, restaurants and hotels, how is
              the hospitality sector responding to supercharged expectations and what can other
              industries learn from their approach?{' '}
            </p>
            <a
              href="https://content.red-badger.com/hotels-meet-the-new-expectations"
              className={styles.CellASliceLink}
            >
              Download the report
            </a>
          </div>
          <div className={styles.CellASliceImageWrapper}>
            <img
              className={styles.CellASliceImage}
              src={image}
              alt="illustration, a smiling man looks at his phone as a jet flies away"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CellASlice;
