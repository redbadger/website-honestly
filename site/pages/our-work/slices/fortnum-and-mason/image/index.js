// @flow

import * as React from 'react';
import styles from './styles.css';

import fortnum from './fortnum.png';
import fortnumMedium from './fortnum-medium.png';

export default function Image() {
  return (
    <div className={styles.imageWrapper}>
      <img className={styles.fortnum} src={fortnum} alt="" />
      <img className={styles.fortnumMedium} src={fortnumMedium} alt="" />
    </div>
  );
}
