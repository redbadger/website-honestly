// @flow

import React from 'react';

import styles from '../shared/styles.css';
import { Container, Description, ReadMore } from '../shared';

import carTrawlerImage from './images/carTrawler.jpg';

const CarTrawlerSlice = () => (
  <Container to="carTrawlerCaseStudy" layout="row-reverse">
    <div className={styles.textContainerReverse}>
      <h2 className={styles.textContainerHeader}>Complete CMS control for travel brands</h2>
      <Description>
        Find out how we demonstrated value with a working prototype in one week and delivered a
        complete CMS control for travel brands within only 5 months.
      </Description>
      <ReadMore />
    </div>
    <div className={styles.imageWrapper}>
      <div className={styles.imageContainer}>
        <img src={carTrawlerImage} alt="Retail giant project snapshot" />
      </div>
    </div>
  </Container>
);

export default CarTrawlerSlice;
