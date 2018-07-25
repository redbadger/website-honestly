// @flow

import React from 'react';
import styles from './styles.css';

import headerWide from './images/header-wide.jpg';
import headerNarrow from './images/header-narrow.jpg';

export default function HeaderImg() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.leftFill} />
      <img className={styles.wide} src={headerWide} alt="" />
      <img className={styles.narrow} src={headerNarrow} alt="" />
      <div className={styles.rightFill} />
    </div>
  );
}
