// @flow

import React from 'react';

import { Container, Description, ReadMore, Header, Text, Image } from '../shared';
import prideImg from './images/listing.gif';

type Props = {
  layoutRight?: boolean,
};

export default function PagoFx({ layoutRight }: Props) {
  return (
    <Container to="pagoFxCaseStudy" layoutRight={layoutRight}>
      <Text layout={layoutRight ? 'rightCol' : 'leftCol'}>
        <Header>Delivering an end-to-end international transfers product in just 18 months </Header>
        <Description>
          Learn how Red Badger helped Santander’s PagoFX team to design, build and deliver a
          best-in-class payments service.
        </Description>
        <ReadMore />
      </Text>
      <Image src={prideImg} alt="iPhone showing Pago FX application " />
    </Container>
  );
}
