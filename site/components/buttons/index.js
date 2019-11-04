// @flow
/* eslint-disable react/no-danger, jsx-a11y/no-static-element-interactions  */

import React from 'react';
import styles from './style.css';
import HubspotButtons from './hubspot-buttons';

type HubspotButtonProps = {
  hubspotName: string,
};

const HubspotButton = ({ hubspotName }: HubspotButtonProps) =>
  HubspotButtons[hubspotName] && (
    <div
      className={`${styles.hubspotBtn} ${styles[`${hubspotName}BtnWrapper`] || ''}`}
      dangerouslySetInnerHTML={HubspotButtons[hubspotName]}
    />
  );

export { HubspotButton };
