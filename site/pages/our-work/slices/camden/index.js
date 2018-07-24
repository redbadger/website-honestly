// @flow

import React from 'react';

import styles from './styles.css';
import { Container, Description, ReadMore, Header, Text, Image } from '../shared';

import camdenLogo from './images/camden_market.png';
import camdenProjectScreenshot from './images/camden.png';

export default () => (
  <Container to="camdenMarketCaseStudy" layout="row" paddingBottom={false}>
    <Text>
      <img src={camdenLogo} className={styles.camdenLogo} alt="Camden Market logo" />
      <Header>Taking steps towards a digital future</Header>
      <Description>
        Built in just ten weeks, Camdenmarket.com relaunched in May 2016 to drive more footfall from
        Londoners to the physical market by showcasing the eclectic range of goods, food and events.
      </Description>
      <ReadMore />
    </Text>
    <Image layout="restricted" src={camdenProjectScreenshot} alt="Camden project screenshot" />
  </Container>
);
