// @flow

import React from 'react';

import { Container, Description, ReadMore, Header, Text, Logo } from '../shared';
import Image from './image';

export default () => (
  <Container to="fortnumAndMasonCaseStudy">
    <Text>
      <Logo slice="fm" />
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
