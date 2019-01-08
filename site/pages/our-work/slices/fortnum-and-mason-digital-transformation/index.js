// @flow

import React from 'react';
import { Container, Description, ReadMore, Header, Text, Logo } from '../shared';
import fmLogo from './images/fortnum-mason-logo.png';

type Props = {
  layoutRight?: boolean,
};

export default function FortnumDigitalTransformation({ layoutRight }: Props) {
  return (
    <Container to="fMTeaCaseStudy" layoutRight={layoutRight}>
      <Text layout="fullWidth">
        <Logo src={fmLogo} slice="fm" />
        <Header>The ongoing digital transformation of a 310-year old retailer</Header>
        <Description>
          Discover how we helped customers find products faster and drive sales of tea.
        </Description>
        <ReadMore center />
      </Text>
    </Container>
  );
}
