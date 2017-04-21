import React from 'react';
import styles from './style.css';

const imageAssetsEndpoint = 'https://res.cloudinary.com/red-badger-assets/image/upload/events/';

export default function BannerReactConf() {
  return (
    <div className={styles.bannerContainer}>
      <a href="https://react.london/" target="_blank" rel="noopener noreferrer">
        <img
          src={`${imageAssetsEndpoint}react-post-conf-desktop-banner.png`}
          alt="React London 2017"
          className={styles.reactConfDesktopBanner}
        />
        <img
          src={`${imageAssetsEndpoint}react-post-conf-tablet-banner.png`}
          alt="React London 2017"
          className={styles.reactConfTabletBanner}
        />
        <img
          src={`${imageAssetsEndpoint}react-post-conf-mobile-banner.png`}
          alt="React London 2017"
          className={styles.reactConfMobileBanner}
        />
      </a>
    </div>
  );
}
