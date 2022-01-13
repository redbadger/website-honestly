// @flow
import * as React from 'react';

import styles from './style.css';
import image from './image.png';

const GenZSlice = () => {
  return (
    <div className={`${styles.GenZSliceWrapper}`} id="genz">
      <div className={styles.GenZSliceContent}>
        <div className={styles.GenZSlice}>
          <div className={styles.GenZSliceText}>
            <h4 className={styles.GenZSliceHeading}>Is your loyalty programme ready for Gen Z?</h4>
            <div className={styles.GenZSliceTextContent}>
              <p>
                Gen Z believe their favourite brands should reward them for their patronage with an
                equitable loyalty programme that is both personalised and seamless. Are you set up
                to manage the incoming tidal wave of supercharged expectations?
              </p>
              <div className={styles.GenZSliceCTA}>
                <div>
                  <p>
                    Thursday, 10th February 2022
                    <br />
                    5:00pm - 6:00pm (GMT)
                  </p>
                </div>
                <a
                  href="https://content.red-badger.com/gen-z-adapting-to-digital-demands#register-now"
                  className={styles.GenZSliceLink}
                >
                  Register for our event
                </a>
              </div>
            </div>
          </div>
          <div className={styles.GenZSliceImageWrapper}>
            <img
              className={styles.GenZSliceImage}
              src={image}
              alt="illustration, a smiling man looks at his phone as a jet flies away"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenZSlice;
