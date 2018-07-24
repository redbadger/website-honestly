// @flow

import React from 'react';
import sharedStyles from '../shared/styles.css';
import styles from './styles.css';
import { Container, Description } from '../shared';

import skyLogo from './images/sky.png';

export default function CaseStudySkySlice() {
  return (
    <Container to="skyCMSCaseStudy">
      <div className={styles.textContainer}>
        <img src={skyLogo} className={styles.clientLogo} alt="Sky logo" />
        <h2 className={styles.textContainerHeader}>
          A modern CMS that is the foundation that supports both customers and the internal team
        </h2>
        <Description>
          Enabling Sky to manage their content with an amazing customer experience
        </Description>
        <div className={styles.links}>
          <p className={sharedStyles.readmore}>Read more</p>
        </div>
      </div>
    </Container>
  );
}
