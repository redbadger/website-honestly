// @flow

import React from 'react';

import { Container, Description, ReadMore, Header, Text, Image } from '../shared';
import carTrawler from './images/car-trawler.jpg';

export default function CarTrawler() {
  return (
    <Container to="carTrawlerCaseStudy">
      <Text>
        <Header>Complete CMS control for travel brands</Header>
        <Description>
          Find out how we demonstrated value with a working prototype in one week and delivered a
          complete CMS control for travel brands within only 5 months.
        </Description>
        <ReadMore />
      </Text>
      <Image
        src={carTrawler}
        alt="Toy blue car driving through paper-made scenery, surrounded by triangular paper trees."
      />
    </Container>
  );
}
