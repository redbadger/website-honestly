// @flow

import React from 'react';

import { Container, Description, ReadMore, Header, Text, Image } from '../shared';
import prideImg from './images/listing.gif';

export default function Pride() {
  return (
    <Container to="prideCaseStudy" layout="row-reverse">
      <Text layout="rightCol">
        <Header>Delivering a best-in-class digital experience</Header>
        <Description>
          Building a 5 star digital experience for Pride in London’s mobile app using React Native,
          promoting inclusion and accessibility for an improved user experience.
        </Description>
        <ReadMore />
      </Text>
      <Image src={prideImg} alt="Pride heart animation" />
    </Container>
  );
}
