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
  <a className={styles.goldCoinLPConsultant} href={profileUrl}>
    <img src={image} alt={`${name} headshot`} />
    <div className={styles.goldCoinLPConsultantLink}>
      {name}
      <Arrow className={styles.goldCoinLPConsultantArrow} />
    </div>
    <p className={styles.goldCoinLPConsultantRole}>{role}</p>
  </a>
);

export default Consultant;
