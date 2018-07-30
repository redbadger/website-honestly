import React from 'react';
import { Container, Description, ReadMore, Header, Text } from '../shared';
import Image from './image';

export default function Retailer() {
  return (
    <Container to="retailerCaseStudy" layout="row-reverse">
      <Text layout="rightCol">
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
