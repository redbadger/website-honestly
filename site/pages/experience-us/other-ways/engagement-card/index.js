// @flow
import React from 'react';
import Arrow from '../../../../components/icons/arrow';
import Link from '../../../../components/link';
import Picture from '../../../../components/picture';

import styles from './style.css';

export type EngagementCardProps = {
  images: {
    main: string,
    large: string,
    medium: string,
    small: string,
  },
  title: string,
  description: string,
  slug: string,
  person: boolean,
};

const EngagementCard = ({ images, title, description, slug, person }: EngagementCardProps) => (
  <Link className={styles.engagementCard} to="goldCoinPage" navigationData={{ slug }}>
    <div className={styles.imgContainer}>
      <Picture
        xLargeSrc={images.main}
        largeSrc={images.large}
        mediumSrc={images.medium}
        smallSrc={images.small}
        alt={`${title} illustration`}
      />
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
