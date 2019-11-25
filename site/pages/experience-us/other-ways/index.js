// @flow
import React, { Component } from 'react';
import styles from './style.css';
import EngagementCard from './engagement-card';

import type { GoldCoinLPProps } from '../../../../templates/gold-coin-lp';

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
      />
    );
  });
};
const OtherWays = ({ goldCoinPages }: OtherWaysProps) => {
  return (
    <div>
      <h2 className={styles.h2}>Other ways to engage with us</h2>
      <div className={styles.carousel}>{renderEngagementCards(goldCoinPages)}</div>
    </div>
  );
};

export default OtherWays;
