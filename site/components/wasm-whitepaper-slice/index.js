// @flow
import * as React from 'react';

import styles from './style.css';
import titleImg from './images/title.png';
import whitepaperImg from './images/whitepaper.png';

const WasmWhitepaperSlice = () => {
  return (
    <div className={`${styles.WasmWhitepaperSliceWrapper}`} id="genz">
      <div className={styles.WasmWhitepaperSliceContent}>
        <div className={styles.WasmWhitepaperSlice}>
          <div className={styles.WasmWhitepaperSliceText}>
            <img
              className={styles.WasmWhitepaperSliceTitleImage}
              src={titleImg}
              alt="text reading: We Love Tech"
            />
            <div className={styles.WasmWhitepaperSliceTextContent}>
              <div className={styles.WasmWhitepaperSliceCTA}>
                <h5>DOWNLOAD THE WHITE PAPER</h5>
              </div>
              <div className={styles.WasmWhitepaperSliceBodyheader}>
                <h3>Multi-cloud platforms are here:</h3>
              </div>
              <div className={styles.WasmWhitepaperSliceBodySubHeader}>
                <h4>How WebAssembly, NATS and wasmCloud can move us beyond the cloud</h4>
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
