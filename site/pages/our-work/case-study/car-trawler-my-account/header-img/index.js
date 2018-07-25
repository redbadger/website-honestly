// @flow

import React from 'react';
import styles from './styles.css';

import headerWide from './images/header-wide.jpg';
import headerNarrow from './images/header-narrow.jpg';

export default function HeaderImg() {
  const altText =
    "A red car heading to a data center right next to the beach, passing a roadsign that says 'Serverless'";

  return (
    <div className={styles.wrapper}>
      <div className={styles.leftFill} />
      <img className={styles.wide} src={headerWide} alt={altText} />
      <img className={styles.narrow} src={headerNarrow} alt={altText} />
      <div className={styles.rightFill} />
    </div>
  );
}
