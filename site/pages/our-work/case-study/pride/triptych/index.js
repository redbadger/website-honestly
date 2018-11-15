// @flow

import React from 'react';
import styles from './styles.css';

import left from './images/left.png';
import middle from './images/middle.png';
import right from './images/right.png';

export default function Triptych() {
  return (
    <div className={styles.wrapper}>
      <img className={styles.leftImg} src={left} alt="" />
      <img className={styles.middleImg} src={middle} alt="" />
      <img className={styles.rightImg} src={right} alt="" />
    </div>
  );
}
