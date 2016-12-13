import React, { Component } from 'react';
import styles from './style.css';
import { imageAssetsEndpoint } from '../../config';

export default class BannerReactConf extends Component {
  render() {
    return (
      <div className={styles.bannerContainer}>
        <a href="https://react.london/" target="_blank">
          <img
            src={`${imageAssetsEndpoint}react-conf-desktop-banner.png`}
            alt="React London 2017"
            className={styles.reactConfDesktopBanner}
          />
          <img
            src={`${imageAssetsEndpoint}react-conf-tablet-banner.png`}
            alt="React London 2017"
            className={styles.reactConfTabletBanner}
          />
          <img
            src={`${imageAssetsEndpoint}react-conf-mobile-banner.png`}
            alt="React London 2017"
            className={styles.reactConfMobileBanner}
          />
        </a>
      </div>
    );
  }
}
