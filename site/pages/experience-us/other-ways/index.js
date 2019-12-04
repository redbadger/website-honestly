// @flow
import React from 'react';
import styles from './style.css';
import EngagementCard from './engagement-card';

import type { GoldCoinLPProps } from '../../../templates/gold-coin-lp';

export type OtherWaysProps = {
  goldCoinPages: Array<GoldCoinLPProps>,
};

const renderEngagementCards = goldCoinPages => {
  return goldCoinPages.map(page => {
    return (
      <EngagementCard
        key={page.slug}
        image={page.headerImage}
        title={page.title}
        description={page.subTitle}
        url={`/experience-us/${page.slug}`}
        person={false}
      />
    );
  });
};

const scrollCarosel = step => {
  if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    const element = document.getElementById('otherWaysCarousel');
    (element: any).scrollLeft += step;
  }
};

const OtherWays = ({ goldCoinPages }: OtherWaysProps) => {
  return (
    <div className={styles.otherWays}>
      <h2 className={styles.h2}>Other ways to engage with us</h2>
      <div className={styles.carousel} id="otherWaysCarousel">
        {renderEngagementCards(goldCoinPages)}
      </div>
      <div className={styles.carouselButtons}>
        <button
          type="button"
          aria-label="Scroll engagement carousel left"
          id="caroselScrollLeft"
          className={styles.carouselButtonLeft}
          onClick={() => {
            scrollCarosel(-160);
          }}
        />{' '}
        <button
          type="button"
          aria-label="Scroll engagement carousel right"
          id="caroselScrollRight"
          className={styles.carouselButtonRight}
          onClick={() => {
            scrollCarosel(160);
          }}
        />
      </div>
    </div>
  );
};

export default OtherWays;
