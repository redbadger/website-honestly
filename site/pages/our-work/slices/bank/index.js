// @flow

import React from 'react';

import { Container, Description, ReadMore, Header, Text, Image } from '../shared';
import bankGif from './images/bank.gif';

type Props = {
  layoutRight?: boolean,
};

export default function Bank({ layoutRight }: Props) {
  return (
    <Container to="bankCaseStudy" layoutRight={layoutRight}>
      <Text layout={layoutRight ? 'rightCol' : 'leftCol'}>
        <Header>Digital transformation in retail banking</Header>
        <Description>
          Discover how we delivered quality digital products to customers quickly, built capability
          and changed the culture to increase business efficiency in one of the world’s largest
          banks.
        </Description>
        <ReadMore />
      </Text>
      <Image src={bankGif} alt="Stick figures building a large arrow from small square blocks" />
    </Container>
  );
}
