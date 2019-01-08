// @flow

import React from 'react';

import { Container, Description, ReadMore, Header, Text, Image } from '../shared';
import fidelityImg from './images/listing.jpg';

type Props = {
  layoutRight?: boolean,
};

export default function Fidelity({ layoutRight }: Props) {
  return (
    <Container to="fidelityCaseStudy" layoutRight={layoutRight}>
      <Text layout={layoutRight ? 'rightCol' : 'leftCol'}>
        <Header>
          Global design and build project for Fidelity International, delivered in four months
        </Header>
        <Description>
          A website which creates a new industry benchmark for design & usability, and empowers the
          client to grow the site and their audience, with tools and ways of working.
        </Description>
        <ReadMore />
      </Text>
      <Image src={fidelityImg} alt="Pride heart animation" />
    </Container>
  );
}
