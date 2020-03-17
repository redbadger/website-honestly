// @flow
import React from 'react';

import styles from './style.css';

export type ConsultantProps = {
  image: string,
  name: string,
  description: string,
  profileUrl: string,
};

const Consultant = ({ image, name, description, profileUrl }: ConsultantProps) => (
  <a className={styles.MBPLPConsultant} href={profileUrl}>
    <img src={image} alt={`${name} headshot`} />
    <div className={styles.MBPLPConsultantLink}>{name}</div>
    <p className={styles.MBPLPConsultantRole}>{description}</p>
  </a>
);

export default Consultant;
