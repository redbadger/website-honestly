// @flow

import React from 'react';

import styles from '../shared/styles.css';
import { Container, Description, ReadMore, Header, Text } from '../shared';

import carTrawlerImage from './images/carTrawler.jpg';

const CarTrawlerSlice = () => (
  <Container to="carTrawlerCaseStudy" layout="row-reverse">
    <Text layout="rightCol">
      <Header>Complete CMS control for travel brands</Header>
      <Description>
        Find out how we demonstrated value with a working prototype in one week and delivered a
        complete CMS control for travel brands within only 5 months.
      </Description>
      <ReadMore />
    </Text>
    <div className={styles.imageWrapper}>
      <div className={styles.imageContainer}>
        <img src={carTrawlerImage} alt="Retail giant project snapshot" />
      </div>
    </div>
  </Container>
);

export default CarTrawlerSlice;
