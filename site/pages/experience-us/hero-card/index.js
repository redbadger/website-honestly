// @flow
/* eslint-disable react/no-danger */
import * as React from 'react';
import { atAGlanceTypes } from '../../../templates/gold-coin-lp/atAGlance';
import Link from '../../../components/link';
import Picture from '../../../components/picture';

import styles from './style.css';

export type HeroCardProps = {
  images: {
    main: string,
    large: string,
    medium: string,
    small: string,
  },
  title: string,
  type: string,
  description: string,
  slug: string,
  blurb: React.Node,
};

const HeroCard = ({ images, title, type, blurb, description, slug }: HeroCardProps) => (
  <Link className={styles.heroCard} to="goldCoinPage" navigationData={{ slug }}>
    <div className={styles.imgContainer}>
      <Picture
        xLargeSrc={images.main}
        largeSrc={images.large}
        mediumSrc={images.medium}
        smallSrc={images.small}
        alt={`${title} illustration`}
      />
    </div>
    <div className={styles.heroCardContainer} data-cy="goldCoinContainer">
      <div className={styles.heroCardContent}>
        <div className={styles.heroCardTitle}>{title}</div>
        <p className={styles.heroCardType}>{atAGlanceTypes[type] && atAGlanceTypes[type].text}</p>
        <div className={styles.description}>{description}</div>
        <div className={styles.blurb} dangerouslySetInnerHTML={{ __html: blurb }} />
        <div className={styles.linkHighlight} data-cy="goldCoinBookNowButton">
          {atAGlanceTypes[type] && atAGlanceTypes[type].messaging}
        </div>
      </div>
    </div>
  </Link>
);

export default HeroCard;
/* eslint-enable react/no-danger */
