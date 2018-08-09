// @flow

import React from 'react';

import { Container, Description, ReadMore, Header, Text, Logo, Image } from '../shared';
import fmLogo from './images/fortnum-mason-logo.png';
import fortnum from './images/fortnum-mason.png';

export default function FortnumAndMason() {
  return (
    <Container to="fortnumAndMasonCaseStudy">
      <Text>
        <Logo src={fmLogo} slice="fm" />
        <Header>
          Fortnum & Mason’s new, elegant website increases revenue and conversion rates
        </Header>
        <Description>
          A scalable, highly flexible new site was needed, and very quickly to avoid more lost
          revenue.
        </Description>
        <ReadMore />
      </Text>
      <Image src={fortnum} alt="" />
    </Container>
  );
}
