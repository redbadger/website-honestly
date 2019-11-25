// @flow
import React from 'react';
import Arrow from '../../../../components/icons/arrow';

import styles from './style.css';

export type EngagementCardProps = {
  image: string,
  title: string,
  description: string,
  url: string,
};

const EngagementCard = ({ image, title, description, url }: EngagementCardProps) => (
  <a className={styles.engagementCard} href={url}>
    <img src={image} alt={`${title} headshot`} />
    <div className={styles.engagementCardLink}>
      {title}
      <Arrow className={styles.engagementCardArrow} />
    </div>
    <p className={styles.engagementCardRole}>{description}</p>
  </a>
);

export default EngagementCard;
