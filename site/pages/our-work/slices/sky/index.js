// @flow

import React from 'react';

import { Container, Description, ReadMore, Header, Text, Logo } from '../shared';

export default function CaseStudySkySlice() {
  return (
    <Container to="skyCMSCaseStudy">
      <Text layout="fullWidth">
        <Logo slice="sky" />
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
