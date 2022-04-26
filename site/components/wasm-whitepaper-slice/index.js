// @flow
import * as React from 'react';

import styles from './style.css';
import titleImg from './images/title.png';
import whitepaperImg from './images/whitepaper.png';

const WasmWhitepaperSlice = () => {
  return (
    <div className={`${styles.WasmWhitepaperSliceWrapper}`}>
      <div className={styles.WasmWhitepaperSliceContent}>
        <div className={styles.WasmWhitepaperSlice}>
          <div className={styles.WasmWhitepaperSliceText}>
            <img
              className={styles.WasmWhitepaperSliceTitleImage}
              src={titleImg}
              alt="text reading: We Love Tech"
            />
            <div className={styles.WasmWhitepaperSliceTextContent}>
              <div className={styles.WasmWhitepaperSliceBodyheader}>
                <h3>
                  Multi-cloud platforms are here: How WebAssembly, NATS and wasmCloud can move us
                  beyond the cloud
                </h3>
              </div>
              <div className={styles.WasmWhitepaperSliceBodySubHeader}>
                <h4>
                  With contributions from Liam Randall, Cosmonic’s CEO and Derek Collison, CEO of
                  Synadia and creator of <a href="http://nats.io/">NATS.io</a>, our latest white
                  paper written by our Chief Scientist, Stuart Harris, maps out the journey to a
                  truly resilient multi-cloud platform.
                </h4>
              </div>
              <div>
                <a href="https://bit.ly/393vkLn" className={styles.WasmWhitepaperSliceLink}>
                  Download White Paper
                </a>
              </div>
            </div>
          </div>
          <div className={styles.WasmWhitepaperSliceImageWrapper}>
            <img
              className={styles.WasmWhitepaperSliceImage}
              src={whitepaperImg}
              alt="An illustration of the WASM whitepaper"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WasmWhitepaperSlice;
