/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/no-danger */
// @flow
import React from 'react';
import ReactGA from 'react-ga';
import styles from './style.css';
import HubspotButtons from './hubspot-buttons';

const trackAnalytics = (title, category) => () =>
  ReactGA.event({
    category,
    action: title,
    label: `From: ${window.location.pathname}`,
  });

type Analytics = {
  analyticsTitle: string,
  analyticsCategory: string,
};
type Props = {
  cta: string,
  linkUrl?: string,
  onHover?: () => any,
  onBlur?: () => any,
} & Analytics;

const Button = ({ cta, linkUrl, onHover, onBlur, analyticsTitle, analyticsCategory }: Props) => {
  return (
    <a
      href={linkUrl}
      className={styles.link}
      onMouseEnter={onHover}
      onMouseLeave={onBlur}
      onClick={trackAnalytics(analyticsTitle, analyticsCategory)}
    >
      {cta}
    </a>
  );
};

type HubspotProps = {
  hubspotTitle: string,
} & Analytics;

const HubspotButton = ({ analyticsTitle, analyticsCategory, hubspotTitle }: HubspotProps) => (
  <div
    className={styles.latestRoundTableLinkContainer}
    // onClick={trackAnalytics('RoundtablePDFLink')}
    onClick={trackAnalytics(analyticsTitle, analyticsCategory)}
  >
    <div
      className={`${styles.hubspotBtn} ${styles.readPdfReportWrapper}`}
      dangerouslySetInnerHTML={HubspotButtons[`${hubspotTitle}`]}
    />
  </div>
);

export { Button, HubspotButton };
