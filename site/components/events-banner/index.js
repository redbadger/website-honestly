import React, { PropTypes } from 'react';
import ReactGA from 'react-ga';
import styles from './style.css';

const trackAnalytics = title => () =>
  ReactGA.event({
    category: 'EventsPageBanner',
    action: title,
    label: `From: ${window.location.pathname}`,
  });

export default function EventsBanner({ url, altText, desktop, tablet, mobile }) {
  return (
    <div className={styles.bannerContainer}>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        onClick={trackAnalytics('Webinar-events page -banner')}
      >
        <img src={desktop} alt={altText} className={styles.eventsDesktopBanner} />
        <img src={tablet} alt={altText} className={styles.eventsTabletBanner} />
        <img src={mobile} alt={altText} className={styles.eventsMobileBanner} />
      </a>
    </div>
  );
}

EventsBanner.propTypes = {
  url: PropTypes.string,
  altText: PropTypes.string,
  desktop: PropTypes.string,
  tablet: PropTypes.string,
  mobile: PropTypes.string,
};
