// @flow

import React from 'react';

import { Container, Description, ReadMore, Header, Text, Logo } from '../shared';
import skyLogo from './images/sky.png';

export default function Sky() {
  return (
    <Container to="skyCMSCaseStudy">
      <Text layout="fullWidth">
        <Logo src={skyLogo} slice="sky" />
        <Header>
          A modern CMS that is the foundation that supports both customers and the internal team
        </Header>
        <Description>
          Enabling Sky to manage their content with an amazing customer experience
        </Description>
        <ReadMore center />
      </Text>
    </Container>
  );
}
