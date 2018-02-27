// @flow

import React from 'react';
import ReactGA from 'react-ga';
import styles from './style.css';

const trackAnalytics = title => () =>
  ReactGA.event({
    category: 'EventsPageBanner',
    action: title,
    label: `From: ${window.location.pathname}`,
  });

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
