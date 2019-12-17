// @flow
import React from 'react';
import Arrow from '../../../../components/icons/arrow';

import styles from './style.css';

export type EngagementCardProps = {
  image: string,
  title: string,
  description: string,
  url: string,
  person: boolean,
};

const EngagementCard = ({ image, title, description, url, person }: EngagementCardProps) => (
  <a className={styles.engagementCard} href={url}>
    <div className={styles.imgContainer}>
      <img src={image} alt={`${title} headshot`} />
    </div>
    <div className={styles.engagementCardContent}>
      <div className={styles.engagementCardLinkWrapper}>
        <div className={styles.engagementCardLink}>
          {title}
          {person && <Arrow className={styles.engagementCardArrow} />}
        </div>
      </div>
      <p className={styles.engagementCardRole}>{description}</p>
      <div className={styles.engagementCardCTA}>Read more</div>
    </div>
  </a>
);

export default EngagementCard;
