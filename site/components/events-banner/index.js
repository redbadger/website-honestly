// @flow

import React from 'react';
import styles from './style.css';

type Props = {
  url: string,
  altText: string,
  desktopURL: string,
  tabletURL: string,
  mobileURL: string,
};

export default function EventsBanner({ url, altText, desktopURL, tabletURL, mobileURL }: Props) {
  return (
    <div className={styles.bannerContainer}>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <picture>
          <source srcSet={desktopURL} media="(min-width: 980px)" />
          <source srcSet={tabletURL} media="(min-width: 690px)" />
          <source srcSet={mobileURL} />
          <img src={desktopURL} alt={altText} className={styles.image} />
        </picture>
      </a>
    </div>
  );
}
