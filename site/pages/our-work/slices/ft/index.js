// @flow

import React from 'react';

import styles from './styles.css';
import { Container, Description, ReadMore, Header, Text, Image } from '../shared';
import ftLogo from './images/ft-logo.png';
import ftProjectImage from './images/meeting.png';

export default () => (
  <Container to="financialTimesCaseStudy" layout="row-reverse">
    <Text layout="rightCol">
      <img src={ftLogo} className={styles.clientLogo} alt="Financial Times logo" />
      <Header>Lasting change for a media giant</Header>
      <Description>
        The Financial Times (FT) is one of the world’s best known and most respected news
        publications. The ‘pink paper’ has a good existing online offering with total circulation of
        over 750k readers, including 550k corporate memberships.
      </Description>
      <ReadMore />
    </Text>
    <Image src={ftProjectImage} alt="Financial Times project snapshot" />
  </Container>
);
