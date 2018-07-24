// @flow

import React from 'react';
import sharedStyles from '../shared/styles.css';
import styles from './styles.css';
import { Container, Description } from '../shared';
import fmLogo from './images/fortnum-mason-logo.png';

export default function CaseStudyFortnumDigitalTransformationSlice() {
  return (
    <Container to="fMTeaCaseStudy">
      <div className={styles.textContainer}>
        <img src={fmLogo} className={styles.clientLogo} alt="Fortnum and Mason logo" />
        <h2 className={styles.textContainerHeader}>
          The ongoing digital transformation of a 310-year old retailer
        </h2>
        <Description>
          Discover how we helped customers find products faster and drive sales of tea.
        </Description>
        <div className={styles.links}>
          <p className={sharedStyles.readmore}>Read more</p>
        </div>
      </div>
    </Container>
  );
}
