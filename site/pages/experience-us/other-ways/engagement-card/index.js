// @flow
import React from 'react';
import Arrow from '../../../../components/icons/arrow';
import Link from '../../../../components/link';

import styles from './style.css';

export type EngagementCardProps = {
  image: string,
  title: string,
  description: string,
  slug: string,
  person: boolean,
};

const EngagementCard = ({ image, title, description, slug, person }: EngagementCardProps) => (
  <Link className={styles.engagementCard} to="goldCoinPage" navigationData={{ slug }}>
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
  </Link>
);

export default EngagementCard;
