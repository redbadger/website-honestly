import React from 'react';
import styles from './styles.css';
import sharedStyles from '../shared/styles.css';
import { Container, Description, ReadMore, Header, Text } from '../shared';

import retailerImage from './images/retailer.jpg';

const RetailerSlice = () => (
  <Container to="retailerCaseStudy" layout="row-reverse">
    <Text layout="rightCol">
      <Header>Next generation platform for retail giant</Header>
      <Description>
        Find out how we helped clear a five year backlog in eight months and delivered a mobile
        first application across seven countries.
      </Description>
      <ReadMore />
    </Text>
    <div className={sharedStyles.imageWrapper}>
      <div className={styles.imageContainer}>
        <img src={retailerImage} alt="Retail giant project snapshot" />
        <div className={styles.orders}>
          <div className={styles.imagePercentage}>+54%</div>
          <div className={styles.imageText}>Increased orders</div>
        </div>
        <div className={styles.visits}>
          <div className={styles.imagePercentage}>+29%</div>
          <div className={styles.imageText}>Uplift in visits</div>
        </div>
      </div>
    </div>
  </Container>
);

export default RetailerSlice;
