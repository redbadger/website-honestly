// @flow

import React from 'react';

import sharedStyles from '../shared/styles.css';
import styles from './styles.css';
import { SliceContainer } from '../shared';

import camdenLogo from './images/camden_market.png';
import camdenProjectScreenshot from './images/camden.png';

export default () => (
  <SliceContainer to="camdenMarketCaseStudy" layout="row" flushBottom>
    <div className={sharedStyles.textContainer}>
      <div>
        <img src={camdenLogo} className={styles.camdenLogo} alt="Camden Market logo" />
        <h2 className={styles.textContainerHeader}>Taking steps towards a digital future</h2>
        <p className={sharedStyles.description}>
          Built in just ten weeks, Camdenmarket.com relaunched in May 2016 to drive more footfall
          from Londoners to the physical market by showcasing the eclectic range of goods, food and
          events.
        </p>
        <div className={sharedStyles.links}>
          <p className={sharedStyles.readmore}>Read more</p>
        </div>
      </div>
    </div>
    <div className={styles.imageWrapper}>
      <img src={camdenProjectScreenshot} alt="Camden project screenshot" />
    </div>
  </SliceContainer>
);
