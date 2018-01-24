import React from 'react';
import ReactGA from 'react-ga';
import styles from './style.css';
import desktopBanner from './images/events-desktop-banner.jpg';
import tabletBanner from './images/events-tablet-banner.jpg';
import mobileBanner from './images/events-mobile-banner.jpg';

const trackAnalytics = title => () =>
  ReactGA.event({
    category: 'EventsPageBanner',
    action: title,
    label: `From: ${window.location.pathname}`,
  });

const bannerAltText = 'Are you bold with technology? Join our webinar';

export default function EventsBanner() {
  return (
    <div className={styles.bannerContainer}>
      <a
        href="http://bit.ly/2Gb1Ata"
        target="_blank"
        rel="noopener noreferrer"
        onClick={trackAnalytics('Webinar-events page -banner')}
      >
        <img src={desktopBanner} alt={bannerAltText} className={styles.eventsDesktopBanner} />
        <img src={tabletBanner} alt={bannerAltText} className={styles.eventsTabletBanner} />
        <img src={mobileBanner} alt={bannerAltText} className={styles.eventsMobileBanner} />
      </a>
    </div>
  );
}
