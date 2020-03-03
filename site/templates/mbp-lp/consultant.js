// @flow
import React from 'react';

import styles from './style.css';

export type ConsultantProps = {
  image: string,
  name: string,
  role: string,
  profileUrl: string,
};

const Consultant = ({ image, name, role, profileUrl }: ConsultantProps) => (
  <a className={styles.MBPLPConsultant} href={profileUrl}>
    <img src={image} alt={`${name} headshot`} />
    <div className={styles.MBPLPConsultantLink}>{name}</div>
    <p className={styles.MBPLPConsultantRole}>{role}</p>
  </a>
);

export default Consultant;
