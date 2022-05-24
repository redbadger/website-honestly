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
                <h3>Is the future of digital loyalty point-less?</h3>
              </div>
              <div className={styles.SliceBodySubHeader}>
                <h4>
                  Join us on Wednesday 6th July at 4pm for a virtual panel discussion to find out
                  how and why loyalty is evolving
                </h4>
              </div>
              <div>
                <a href="https://bit.ly/3GbWdcw" className={styles.SliceLink}>
                  Register now
                </a>
              </div>
            </div>
          </div>
          <div className={styles.SliceImageWrapper}>
            <img className={styles.SliceImage} src={loyaltyImage} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slice;
