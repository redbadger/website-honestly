// @flow

import React from 'react';

import { Container, Description, ReadMore, Header, Text, Image } from '../shared';
import carTrawlerImage from './images/carTrawler.jpg';

const CarTrawlerSlice = () => (
  <Container to="carTrawlerCaseStudy" layout="row-reverse">
    <Text layout="rightCol">
      <Header>Complete CMS control for travel brands</Header>
      <Description>
        Find out how we demonstrated value with a working prototype in one week and delivered a
        complete CMS control for travel brands within only 5 months.
      </Description>
      <ReadMore />
    </Text>
    <Image src={carTrawlerImage} alt="Retail giant project snapshot" />
  </Container>
);

export default CarTrawlerSlice;
