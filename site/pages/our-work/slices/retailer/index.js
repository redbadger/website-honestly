// @flow

import React from 'react';
import { Container, Description, ReadMore, Header, Text } from '../shared';
import Image from './image';

type Props = {
  layoutRight?: boolean,
};

export default function Retailer({ layoutRight }: Props) {
  return (
    <Container to="retailerCaseStudy" layoutRight={layoutRight}>
      <Text layout={layoutRight ? 'rightCol' : 'leftCol'}>
        <Header>Next generation platform for retail giant</Header>
        <Description>
          Find out how we helped clear a five year backlog in eight months and delivered a mobile
          first application across seven countries.
        </Description>
        <ReadMore />
      </Text>
      <Image />
    </Container>
  );
}
