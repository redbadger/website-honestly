// @flow
import * as React from 'react';

import styles from './style.css';
import titleImg from './images/title.png';
import loyaltyImage from './images/loyalty-image.png';

const Slice = () => {
  return (
    <div className={`${styles.SliceWrapper}`}>
      <div>
        <div className={styles.Slice}>
          <div className={styles.SliceText}>
            <img
              className={styles.SliceTitleImage}
              src={titleImg}
              alt="text reading: Badger Sessions"
            />

            <div className={styles.SliceTextContent}>
              <div className={styles.SliceBodyheader}>
                <h3>Is the future of loyalty point-less, or point-based?</h3>
              </div>
              <div className={styles.SliceBodySubHeader}>
                <h4>
                  Our latest event hosted an exclusive panel of digital loyalty experts from some of
                  the UK’s leading brands debate the future of loyalty, and where blue-chips must go
                  next to keep customers happy, engaged and loyal.
                </h4>
              </div>
              <div>
                <a
                  href="https://content.red-badger.com/digital-loyalty/pointless-loyalty"
                  className={styles.SliceLink}
                >
                  WATCH NOW
                </a>
              </div>
            </div>
          </div>
          <div className={styles.SliceImageWrapper}>
            <img className={styles.SliceImage} src={loyaltyImage} aria-hidden="true" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slice;
