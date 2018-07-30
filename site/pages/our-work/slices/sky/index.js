// @flow

import React from 'react';
import styles from './styles.css';
import { Container, Description, ReadMore, Header } from '../shared';

import skyLogo from './images/sky.png';

export default function CaseStudySkySlice() {
  return (
    <Container to="skyCMSCaseStudy">
      <div className={styles.textContainer}>
        <img src={skyLogo} className={styles.clientLogo} alt="Sky logo" />
        <Header>
          A modern CMS that is the foundation that supports both customers and the internal team
        </Header>
        <Description>
          Enabling Sky to manage their content with an amazing customer experience
        </Description>
        <ReadMore center />
      </div>
    </Container>
  );
}
