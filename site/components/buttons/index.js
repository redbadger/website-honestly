/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/no-danger */

// @flow
import React from 'react';
import styles from './style.css';
import HubspotButtons from './hubspot-buttons';

type HubspotButtonProps = {
  className?: string,
  hubspotTitle: string,
};

const RoundtableHubspotButton = ({ className, hubspotTitle }: HubspotButtonProps) => (
  <div
    className={`${styles.hubspotBtn} ${className || ''}`}
    dangerouslySetInnerHTML={HubspotButtons[`${hubspotTitle}`]}
  />
);

export { RoundtableHubspotButton };
