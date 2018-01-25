import React, { PropTypes } from 'react';
import ReactGA from 'react-ga';
import styles from './style.css';

const trackAnalytics = title => () =>
  ReactGA.event({
    category: 'EventsPageBanner',
    action: title,
    label: `From: ${window.location.pathname}`,
  });

export default function EventsBanner({ url, altText, desktopURL, tabletURL, mobileURL }) {
  return (
    <div className={styles.bannerContainer}>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        onClick={trackAnalytics('Webinar-events page -banner')}
      >
        <img src={desktopURL} alt={altText} className={styles.eventsDesktopBanner} />
        <img src={tabletURL} alt={altText} className={styles.eventsTabletBanner} />
        <img src={mobileURL} alt={altText} className={styles.eventsMobileBanner} />
      </a>
    </div>
  );
}

EventsBanner.propTypes = {
  url: PropTypes.string,
  altText: PropTypes.string,
  desktopURL: PropTypes.string,
  tabletURL: PropTypes.string,
  mobileURL: PropTypes.string,
};
