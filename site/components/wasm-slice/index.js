// @flow
import * as React from 'react';

import styles from './style.css';
import backgroundImg from './images/background.png';
import titleImg from './images/title.png';

const WasmSlice = () => {
  return (
    <div className={`${styles.WasmSliceWrapper}`} id="genz">
      <div className={styles.WasmSliceContent}>
        <div className={styles.WasmSlice}>
          <div className={styles.WasmSliceText}>
            <img
              className={styles.WasmSliceTitleImage}
              src={titleImg}
              alt="text reading: We Love Tech"
            />
            <div className={styles.WasmSliceTextContent}>
              <p>
                <strong className={styles.WasmSliceStrong}>
                  The next generation of cloud native distributed systems is here
                </strong>{' '}
                There’s a quiet revolution going on that’s starting to affect every corner of the
                software industry. It’s called WebAssembly. You’ve probably heard about it as the
                fourth language of the web, but its application outside the browser is about to
                change everything! Join us as we explore the power of this simple technology and
                what it means for the future of the platform.
              </p>
              <div className={styles.WasmSliceCTA}>
                <div>
                  <p>
                    Event - Wednesday, 2nd March - 18:30
                    <br />
                    At Red Badger HQ and Virtual
                  </p>
                </div>
                <a href="https://bit.ly/3sH4sar" className={styles.WasmSliceLink}>
                  Register for our event
                </a>
              </div>
            </div>
          </div>
          <div className={styles.WasmSliceImageWrapper}>
            <img
              className={styles.WasmSliceImage}
              src={backgroundImg}
              alt="illustration, a smiling man looks at his phone as a jet flies away"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WasmSlice;
