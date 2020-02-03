// @flow
import React from 'react';

import styles from './style.css';

import Link from '../../components/link';
import Picture from '../../components/picture';

import { atAGlanceTypes } from './atAGlance';

export type PreviewSliceProps = {
  images: {
    main: string,
    large: string,
    medium: string,
    small: string,
  },
  title: string,
  type: string,
  subTitle: string,
  slug: string,
  duration: string,
  alt: string,
};

const PreviewSlice = ({
  images,
  title,
  subTitle,
  slug,
  duration,
  alt,
  type,
}: PreviewSliceProps) => (
  <Link className={styles.goldCoinLPPreview} to="goldCoinPage" navigationData={{ slug }}>
    <div className={styles.goldCoinLPDurationSmall}>{duration.toUpperCase()}</div>
    <div className={styles.goldCoinLPPreviewImageContainer}>
      <Picture
        xLargeSrc={images.main}
        largeSrc={images.large}
        mediumSrc={images.medium}
        smallSrc={images.small}
        alt={alt}
      />
    </div>
    <div className={styles.goldCoinLPPreviewText}>
      <h4 className={styles.h4}>{title}</h4>
      {atAGlanceTypes[type] && (
        <p className={styles.goldCoinLPPreviewSubtitle}>{atAGlanceTypes[type].text}</p>
      )}
      <p className={styles.previewCTA}>{subTitle}</p>
    </div>
  </Link>
);

export default PreviewSlice;
