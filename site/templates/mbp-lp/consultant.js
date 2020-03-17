// @flow
import React from 'react';

import styles from './style.css';

export type ConsultantProps = {
  image: string,
  name: string,
  description: string,
  profileUrl: string,
  imgRight: boolean,
};

const Consultant = ({ image, name, description, profileUrl, imgRight }: ConsultantProps) => (
  <a className={styles.MBPLPConsultant} href={profileUrl}>
    <img className={styles.MBPLPConsultantImgMobile} src={image} alt={`${name} headshot`} />
    {imgRight || <img className={styles.MBPLPConsultantImg} src={image} alt={`${name} headshot`} />}
    <div className={styles.MBPLPConsultantText}>
      <div className={styles.MBPLPConsultantTextCenter}>
        <div className={styles.MBPLPConsultantLink}>{name}</div>
        <p className={styles.MBPLPConsultantRole}>{description}</p>
      </div>
    </div>
    {imgRight && <img className={styles.MBPLPConsultantImg} src={image} alt={`${name} headshot`} />}
  </a>
);

export default Consultant;
