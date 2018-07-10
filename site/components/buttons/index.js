// @flow
/* eslint-disable react/no-danger, jsx-a11y/no-static-element-interactions  */

import React from 'react';
import styles from './style.css';
import HubspotButtons from './hubspot-buttons';

type HubspotButtonProps = {
  className?: string,
  hubspotTitle: string,
  gaTracking: () => {},
};

const RoundtableHubspotButton = ({ className, hubspotTitle, gaTracking }: HubspotButtonProps) => (
  <div
    className={`${styles.hubspotBtn} ${className || ''}`}
    onClick={gaTracking}
    dangerouslySetInnerHTML={HubspotButtons[`${hubspotTitle}`]}
  />
);

export { RoundtableHubspotButton };
