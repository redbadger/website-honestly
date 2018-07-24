// @flow

import React from 'react';
import { Container, Description, ReadMore, Header, Text, Logo } from '../shared';
import fmLogo from './images/fortnum-mason-logo.png';

export default function CaseStudyFortnumDigitalTransformationSlice() {
  return (
    <Container to="fMTeaCaseStudy">
      <Text layout="fullWidth">
        <Logo src={fmLogo} slice="fm" />
        <Header>The ongoing digital transformation of a 310-year old retailer</Header>
        <Description>
          Discover how we helped customers find products faster and drive sales of tea.
        </Description>
        <ReadMore center />
      </Text>
    </Container>
  );
}
