// @flow

import React from 'react';

import { Container, Description, ReadMore, Header, Text, Image } from '../shared';
import NandosLoyaltyImg from './images/listing-loyalty.png';

type Props = {
  layoutRight?: boolean,
};

export default function PagoFx({ layoutRight }: Props) {
  return (
    <Container to="nandosLoyaltyCaseStudy" layoutRight={layoutRight}>
      <Text layout={layoutRight ? 'rightCol' : 'leftCol'}>
        <Header>
          Enhancing Nando&apos;s loyalty programme: the UK&apos;s first digital rewards scheme
        </Header>
        <Description>
          A cross-functional team designed and built a UK first mobile NFC loyalty card and
          fundamentally changed the way customers engage with the brand across physical and digital
          channels.
        </Description>
        <ReadMore />
      </Text>
      <Image src={NandosLoyaltyImg} alt="Nando's loyalty" />
    </Container>
  );
}
