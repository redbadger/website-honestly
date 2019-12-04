// @flow
/* eslint-disable react/no-danger */
import * as React from 'react';
import { atAGlanceTypes } from '../../../templates/gold-coin-lp/atAGlance';

import styles from './style.css';

export type HeroCardProps = {
  image: string,
  title: string,
  type: string,
  description: string,
  url: string,
  blurb: React.Node,
};

const HeroCard = ({ image, title, type, blurb, description, url }: HeroCardProps) => (
  <a className={styles.heroCard} href={url}>
    <div className={styles.imgContainer}>
      <img src={image} alt={`${title} headshot`} />
    </div>
    <div className={styles.heroCardContainer}>
      <div className={styles.heroCardContent}>
        <div className={styles.heroCardTitle}>{title}</div>
        <p className={styles.heroCardType}>{atAGlanceTypes[type] && atAGlanceTypes[type].text}</p>
        <div className={styles.description}>{description}</div>
        <div className={styles.subHeader}>You&apos;ll learn</div>
        <div className={styles.blurb} dangerouslySetInnerHTML={{ __html: blurb }} />
        <div className={styles.linkHighlight}>
          {atAGlanceTypes[type] && atAGlanceTypes[type].messaging}
        </div>
      </div>
    </div>
  </a>
);

export default HeroCard;
/* eslint-enable react/no-danger */
