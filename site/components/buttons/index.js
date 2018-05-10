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

type HubspotButtonProps = {
  className?: string,
  hubspotTitle: string,
} & Analytics;

const RoundtableHubspotButton = ({
  analyticsTitle,
  analyticsCategory,
  className,
  hubspotTitle,
}: HubspotButtonProps) => (
  <div
    className={`${styles.hubspotBtn} ${className || ''}`}
    dangerouslySetInnerHTML={HubspotButtons[`${hubspotTitle}`]}
    onClick={trackAnalytics(analyticsTitle, analyticsCategory)}
  />
);

export { RoundtableHubspotButton };
