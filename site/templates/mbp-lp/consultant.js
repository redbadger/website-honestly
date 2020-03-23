// @flow
import React from 'react';

import styles from './style.css';

import type { responsiveImage } from '../../types/responsiveImage';

export type ConsultantProps = {
  image: responsiveImage,
  name: string,
  description: string,
  profileUrl: string,
  imgRight: boolean,
};

const ConsultantImage = ({
  className,
  image,
  name,
}: {
  className: string,
  image: responsiveImage,
  name: string,
}) => (
  <img
    className={className}
    src={image}
    srcSet={image.srcSet}
    alt={`${name} headshot`}
    sizes="(min-width: 980px) 1200px, (min-width: 690px) 600px, 100vw"
  />
);

const Consultant = ({ image, name, description, profileUrl, imgRight }: ConsultantProps) => (
  <a className={styles.MBPLPConsultant} href={profileUrl}>
    <ConsultantImage className={styles.MBPLPConsultantImgMobile} image={image} name={name} />
    {imgRight || (
      <ConsultantImage className={styles.MBPLPConsultantImg} image={image} name={name} />
    )}
    <div className={styles.MBPLPConsultantText}>
      <div className={styles.MBPLPConsultantTextCenter}>
        <div className={styles.MBPLPConsultantLink}>{name}</div>
        <p className={styles.MBPLPConsultantRole}>{description}</p>
      </div>
    </div>
    {imgRight && (
      <ConsultantImage className={styles.MBPLPConsultantImg} image={image} name={name} />
    )}
  </a>
);

export default Consultant;
