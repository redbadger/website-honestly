// @flow
import React from 'react';

import ClockIcon from './clock-icon';

import styles from './style.css';

export type PreviewSliceProps = {
  image: string,
  title: string,
  subTitle: string,
  url: string,
  duration: string,
  alt: string,
};

const PreviewSlice = ({ image, title, subTitle, url, duration, alt }: PreviewSliceProps) => (
  <a className={styles.goldCoinLPPreview} href={url}>
    <div className={styles.goldCoinLPDurationSmall}>
      <ClockIcon />
      {duration}
    </div>
    <img src={image} alt={alt} />
    <div className={styles.goldCoinLPPreviewText}>
      <h4 className={styles.h4}>{title}</h4>
      <p className={styles.goldCoinLPPreviewSubtitle}>{subTitle}</p>
    </div>
  </a>
);

export default PreviewSlice;
