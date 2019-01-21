// @flow

import React from 'react';

import { Container, Description, ReadMore, Header, Text, Logo, Image } from '../shared';
import fmLogo from './images/fortnum-mason-logo.png';
import fortnum from './images/fortnum-mason.png';

type Props = {
  layoutRight?: boolean,
};

export default function FortnumAndMason({ layoutRight }: Props) {
  return (
    <Container to="fortnumAndMasonCaseStudy" layoutRight={layoutRight}>
      <Text layout={layoutRight ? 'rightCol' : 'leftCol'}>
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
      <Image
        src={fortnum}
        alt="An iPad with the F&M site open, with a box of F&M branded tea to the left hand side"
      />
    </Container>
  );
}
