// @flow

import React from 'react';

import styles from '../shared/styles.css';
import { Container, Description, ReadMore, Header } from '../shared';

import bankGif from './images/bank.gif';

export default function Bank() {
  return (
    <Container to="bankCaseStudy">
      <div className={styles.textContainer}>
        <Header>Digital transformation in retail banking</Header>
        <Description>
          Discover how we delivered quality digital products to customers quickly, built capability
          and changed the culture to increase business efficiency in one of the world’s largest
          banks.
        </Description>
        <ReadMore />
      </div>
      <div className={styles.imageWrapper}>
        <img className={styles.projectBigSmallSnapshot} src={bankGif} alt="Bank project snapshot" />
      </div>
    </Container>
  );
}
