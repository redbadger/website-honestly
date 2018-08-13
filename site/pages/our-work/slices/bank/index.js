// @flow

import React from 'react';

import { Container, Description, ReadMore, Header, Text, Image } from '../shared';
import bankGif from './images/bank.gif';

export default function Bank() {
  return (
    <Container to="bankCaseStudy" layout="row-reverse">
      <Text layout="rightCol">
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
