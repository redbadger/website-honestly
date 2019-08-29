// @flow
import React from 'react';
import Arrow from '../../components/icons/arrow';

import styles from './style.css';

export type ConsultantProps = {
  image: string,
  name: string,
  role: string,
  profileUrl: string,
};

const Consultant = ({ image, name, role, profileUrl }: ConsultantProps) => (
  <div className={styles.goldCoinLPConsultant}>
    <img src={image} alt={`${name} headshot`} />
    <a className={styles.goldCoinLPConsultantLink} href={profileUrl}>
      {name}
      <Arrow className={styles.goldCoinLPConsultantArrow} />
    </a>
    <p className={styles.goldCoinLPConsultantRole}>{role}</p>
  </div>
);

export default Consultant;
