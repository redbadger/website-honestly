// @flow
/* eslint-disable react/no-danger */
import * as React from 'react';
import { atAGlanceTypes } from '../../../templates/gold-coin-lp/atAGlance';
import Link from '../../../components/link';

import styles from './style.css';

export type HeroCardProps = {
  image: string,
  title: string,
  type: string,
  description: string,
  slug: string,
  blurb: React.Node,
};

const HeroCard = ({ image, title, type, blurb, description, slug }: HeroCardProps) => (
  <Link className={styles.heroCard} to="goldCoinPage" navigationData={{ slug }}>
    <div className={styles.imgContainer}>
      <img src={image} alt={`${title} headshot`} />
    </div>
    <div className={styles.heroCardContainer}>
      <div className={styles.heroCardContent}>
        <div className={styles.heroCardTitle}>{title}</div>
        <p className={styles.heroCardType}>{atAGlanceTypes[type] && atAGlanceTypes[type].text}</p>
        <div className={styles.description}>{description}</div>
        <div className={styles.blurb} dangerouslySetInnerHTML={{ __html: blurb }} />
        <div className={styles.linkHighlight}>
          {atAGlanceTypes[type] && atAGlanceTypes[type].messaging}
        </div>
      </div>
    </div>
  </Link>
);

export default HeroCard;
/* eslint-enable react/no-danger */
