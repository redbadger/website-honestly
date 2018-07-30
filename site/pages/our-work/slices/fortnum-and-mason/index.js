// @flow

import React from 'react';

import styles from './styles.css';
import fmLogo from './images/fortnum-mason-logo.png';
import fmProjectSnapshot from './images/fortnum.png';
import fmProjectMediumSnapshot from './images/fortnum-medium.png';
import { Container, Description, ReadMore, Header, Text } from '../shared';

export default () => (
  <Container to="fortnumAndMasonCaseStudy">
    <Text>
      <img src={fmLogo} className={styles.clientLogo} alt="Fortnum and Mason logo" />
      <Header>Fortnum & Mason’s new, elegant website increases revenue and conversion rates</Header>
      <Description>
        A scalable, highly flexible new site was needed, and very quickly to avoid more lost
        revenue.
      </Description>
      <ReadMore />
    </Text>
    <div className={styles.imageWrapper}>
      <img className={styles.projectBigSmallSnapshot} src={fmProjectSnapshot} alt="" />
      <img className={styles.projectMediumSnapshot} src={fmProjectMediumSnapshot} alt="" />
    </div>
  </Container>
);
