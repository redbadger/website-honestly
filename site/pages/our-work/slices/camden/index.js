// @flow

import React from 'react';

import sharedStyles from '../shared/styles.css';
import styles from './styles.css';
import { Container, Description, ReadMore } from '../shared';

import camdenLogo from './images/camden_market.png';
import camdenProjectScreenshot from './images/camden.png';

export default () => (
  <Container to="camdenMarketCaseStudy" layout="row" paddingBottom={false}>
    <div className={sharedStyles.textContainer}>
      <div>
        <img src={camdenLogo} className={styles.camdenLogo} alt="Camden Market logo" />
        <h2 className={styles.textContainerHeader}>Taking steps towards a digital future</h2>
        <Description>
          Built in just ten weeks, Camdenmarket.com relaunched in May 2016 to drive more footfall
          from Londoners to the physical market by showcasing the eclectic range of goods, food and
          events.
        </Description>
        <ReadMore />
      </div>
    </div>
    <div className={styles.imageWrapper}>
      <img src={camdenProjectScreenshot} alt="Camden project screenshot" />
    </div>
  </Container>
);
