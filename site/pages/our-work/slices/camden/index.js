// @flow

import React from 'react';

import { Container, Description, ReadMore, Header, Text, Image, Logo } from '../shared';
import camdenProjectScreenshot from './images/camden.png';
import camdenLogo from './images/camden_market.png';

export default () => (
  <Container to="camdenMarketCaseStudy" layout="row" removeBottomPadding>
    <Text>
      <Logo src={camdenLogo} slice="camden" />
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
