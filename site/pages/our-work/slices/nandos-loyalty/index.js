// @flow

import React from 'react';

import { Container, Description, ReadMore, Header, Text, Image } from '../shared';
import pagoFxImg from './images/loyalty.jpg';

type Props = {
  layoutRight?: boolean,
};

export default function PagoFx({ layoutRight }: Props) {
  return (
    <Container to="nandosLoyaltyCaseStudy" layoutRight={layoutRight}>
      <Text layout={layoutRight ? 'rightCol' : 'leftCol'}>
        <Header>Reimagining what a loyalty programme experience could be like</Header>
        <Description>
          Together with Nando&apos;s, we designed and built a UK first mobile NFC loyalty card and
          changed the way customers interact with the loyalty programme across physical and digital
          channels.
        </Description>
        <ReadMore />
      </Text>
      <Image src={pagoFxImg} alt="iPhone showing Pago FX application " />
    </Container>
  );
}
