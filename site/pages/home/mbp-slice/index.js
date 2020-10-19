import React from 'react';
import styles from './style.css';

import MBPLogo from './mbp-logo';

import shape01 from './images/shape01.png';
import shape02 from './images/shape02.png';
import shape03 from './images/shape03.png';
import shape04 from './images/shape04.png';
import shape05 from './images/shape05.png';

import bgTriangle from './images/bgTriangle.png';

const MBPSlice = () => (
  <div className={styles.mbpSlice}>
    <div className={styles.mbpSlice__wrapper}>
      <div className={styles.mbpSlice__bgShapes}>
        <img src={shape01} alt="" className={styles.mbpSlice__shape01} />
        <img src={shape02} alt="" className={styles.mbpSlice__shape02} />
        <img src={shape03} alt="" className={styles.mbpSlice__shape03} />
        <img src={shape04} alt="" className={styles.mbpSlice__shape04} />
        <img src={shape05} alt="" className={styles.mbpSlice__shape05} />
      </div>
      <img src={bgTriangle} alt="" className={styles.mbpSlice__bgTriangle} />
      <div className={styles.mbpSlice__Content}>
        <MBPLogo />
        <p>
          We’re on a mission to solve the world’s biggest challenges through radical collaboration.
        </p>
        <a href="https://missionbeyond.co.uk" target="_blank" rel="noopener noreferrer">
          Find out more
        </a>
      </div>
    </div>
  </div>
);

export default MBPSlice;
