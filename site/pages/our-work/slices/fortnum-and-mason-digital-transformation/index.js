// @flow

import React from 'react';
import { Container, Description, ReadMore, Header, Text, Logo } from '../shared';

export default function CaseStudyFortnumDigitalTransformationSlice() {
  return (
    <Container to="fMTeaCaseStudy">
      <Text layout="fullWidth">
        <Logo slice="fm" />
        <Header>The ongoing digital transformation of a 310-year old retailer</Header>
        <Description>
          Discover how we helped customers find products faster and drive sales of tea.
        </Description>
        <ReadMore center />
      </Text>
    </Container>
  );
}
