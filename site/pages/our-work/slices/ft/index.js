// @flow

import React from 'react';

import { Container, Description, ReadMore, Header, Text, Image, Logo } from '../shared';
import ft from './images/ft.png';
import ftLogo from './images/ft-logo.png';

type Props = {
  layoutRight?: boolean,
};

export default function Ft({ layoutRight }: Props) {
  return (
    <Container to="financialTimesCaseStudy" layoutRight={layoutRight}>
      <Text layout={layoutRight ? 'rightCol' : 'leftCol'}>
        <Logo src={ftLogo} slice="ft" />
        <Header>Lasting change for a media giant</Header>
        <Description>
          The Financial Times (FT) is one of the world’s best known and most respected news
          publications. The ‘pink paper’ has a good existing online offering with total circulation
          of over 750k readers, including 550k corporate memberships.
        </Description>
        <ReadMore />
      </Text>
      <Image src={ft} alt="An agile stand up in progress" />
    </Container>
  );
}
