import React from 'react';
import styles from './style.css';

import desktopBanner from './images/events-desktop-banner.jpg';
import tabletBanner from './images/events-tablet-banner.png';
import mobileBanner from './images/events-mobile-banner.png';

export default function EventsBanner() {
  return (
    <div className={styles.bannerContainer}>
      <a href="https://attendee.gotowebinar.com/register/4215309162791382274?source=Rb+event+site+banner" target="_blank" rel="noopener noreferrer">
        <img
          src={desktopBanner}
          alt="Are you bold with technology? Join our webinar"
          className={styles.eventsDesktopBanner}
        />
        <img src={tabletBanner} alt="React London 2017" className={styles.eventsTabletBanner} />
        <img src={mobileBanner} alt="React London 2017" className={styles.eventsMobileBanner} />
      </a>
    </div>
  );
}
