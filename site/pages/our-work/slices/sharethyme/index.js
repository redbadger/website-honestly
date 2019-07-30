// @flow

import React from 'react';

import { Container, Description, ReadMore, Header, Text, Image } from '../shared';
import sharethymeGif from './images/sharethyme.gif';

type Props = {
  layoutRight?: boolean,
};

export default function Sharethyme({ layoutRight }: Props) {
  return (
    <Container isExternal to="https://www.red-badger.com/sharethyme" layoutRight={layoutRight}>
      <Text layout={layoutRight ? 'rightCol' : 'leftCol'}>
        <Header> Solving real world problems without the risk </Header>
        <Description>Here’s how we built an innovative, user-first platform in 8 days.</Description>
        <ReadMore />
      </Text>
      <Image
        src={sharethymeGif}
        alt="Animated illustration of hands adding oil to a bowl and stirring"
      />
    </Container>
  );
}
