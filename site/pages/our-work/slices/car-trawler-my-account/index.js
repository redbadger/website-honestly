// @flow

import React from 'react';

import { Container, Description, ReadMore, Header, Text, Image } from '../shared';
import carTrawler from './images/car-trawler.jpg';

export default function CarTrawler() {
  return (
    <Container to="carTrawlerMyAccountCaseStudy">
      <Text>
        <Header>Building a self-servicing customer account</Header>
        <Description>
          Find out how we built a self-servicing customer account, enabling customers to make
          bookings more efficiently, and reducing risks and costs for travel brands, all within 12
          weeks.
        </Description>
        <ReadMore />
      </Text>
      <Image
        src={carTrawler}
        alt="A red car heading to a data center right next to the beach, passing a roadsign that says 'Serverless'"
      />
    </Container>
  );
}
