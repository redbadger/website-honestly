// @flow

import React from 'react';

import { Container, Description, ReadMore, Header, Text, Logo } from '../shared';
import Image from './image';
import fmLogo from './images/fortnum-mason-logo.png';

export default () => (
  <Container to="fortnumAndMasonCaseStudy">
    <Text>
      <Logo src={fmLogo} slice="fm" />
      <Header>Fortnum & Mason’s new, elegant website increases revenue and conversion rates</Header>
      <Description>
        A scalable, highly flexible new site was needed, and very quickly to avoid more lost
        revenue.
      </Description>
      <ReadMore />
    </Text>
    <Image />
  </Container>
);
