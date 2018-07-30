// @flow

import React from 'react';

import { Container, Description, ReadMore, Header, Text, Image, Logo } from '../shared';
import ftProjectImage from './images/meeting.png';
import ftLogo from './images/ft-logo.png';

export default () => (
  <Container to="financialTimesCaseStudy" layout="row-reverse">
    <Text layout="rightCol">
      <Logo src={ftLogo} slice="ft" />
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
