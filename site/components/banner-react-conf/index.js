import React from 'react';
import styles from './style.css';

import desktopBanner from './images/react-post-conf-desktop-banner.png';
import tabletBanner from './images/react-post-conf-tablet-banner.png';
import mobileBanner from './images/react-post-conf-mobile-banner.png';

export default function BannerReactConf() {
  return (
    <div className={styles.bannerContainer}>
      <a href="https://react.london/" target="_blank" rel="noopener noreferrer">
        <img
          src={desktopBanner}
          alt="React London 2017"
          className={styles.reactConfDesktopBanner}
        />
        <img src={tabletBanner} alt="React London 2017" className={styles.reactConfTabletBanner} />
        <img src={mobileBanner} alt="React London 2017" className={styles.reactConfMobileBanner} />
      </a>
    </div>
  );
}
