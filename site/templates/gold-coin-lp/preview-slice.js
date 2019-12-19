// @flow
import React from 'react';

import styles from './style.css';

import { atAGlanceTypes } from './atAGlance';

export type PreviewSliceProps = {
  image: string,
  title: string,
  type: string,
  subTitle: string,
  url: string,
  duration: string,
  alt: string,
};

const PreviewSlice = ({ image, title, subTitle, url, duration, alt, type }: PreviewSliceProps) => (
  <a className={styles.goldCoinLPPreview} href={url}>
    <div className={styles.goldCoinLPDurationSmall}>{duration.toUpperCase()}</div>
    <div className={styles.goldCoinLPPreviewImageContainer}>
      <img src={image} alt={alt} />
    </div>
    <div className={styles.goldCoinLPPreviewText}>
      <h4 className={styles.h4}>{title}</h4>
      {atAGlanceTypes[type] && (
        <p className={styles.goldCoinLPPreviewSubtitle}>{atAGlanceTypes[type].text}</p>
      )}
      <p className={styles.previewCTA}>{subTitle}</p>
    </div>
  </a>
);

export default PreviewSlice;
