// @flow

import React from 'react';

import { Container, Description, ReadMore, Header, Text, Image, Logo } from '../shared';
import camden from './images/camden.png';
import camdenLogo from './images/camden-logo.png';

type Props = {
  layoutRight?: boolean,
};

export default function Camden({ layoutRight }: Props) {
  return (
    <Container to="camdenMarketCaseStudy" layoutRight={layoutRight}>
      <Text layout={layoutRight ? 'rightCol' : 'leftCol'}>
        <Logo src={camdenLogo} slice="camden" />
        <Header>Taking steps towards a digital future</Header>
        <Description>
          Built in just ten weeks, Camdenmarket.com relaunched in May 2016 to drive more footfall
          from Londoners to the physical market by showcasing the eclectic range of goods, food and
          events.
        </Description>
        <ReadMore />
      </Text>
      <Image src={camden} layout="attachToBottom" alt="A mobile phone with the Camden site open" />
    </Container>
  );
}
