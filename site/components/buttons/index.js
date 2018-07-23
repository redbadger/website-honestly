// @flow
/* eslint-disable react/no-danger, jsx-a11y/no-static-element-interactions  */

import React from 'react';
import styles from './style.css';
import HubspotButtons from './hubspot-buttons';

type HubspotButtonProps = {
  hubspotName: string,
  gaTracking?: Function,
};

const HubspotButton = ({ hubspotName, gaTracking }: HubspotButtonProps) =>
  HubspotButtons[hubspotName] && (
    <div
      className={`${styles.hubspotBtn} ${styles[`${hubspotName}BtnWrapper`] || ''}`}
      onClick={gaTracking}
      dangerouslySetInnerHTML={HubspotButtons[hubspotName]}
    />
  );

export { HubspotButton };
