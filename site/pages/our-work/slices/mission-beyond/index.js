// @flow

import React from 'react';
import styles from './style.css';

import { Container, Description, ReadMore, Header, Text } from '../shared';
import heroImg from './images/header@3x.jpg';

type Props = {
  layoutRight?: boolean,
};

export default function MissionBeyond({ layoutRight }: Props) {
  return (
    <Container to="missionBeyondCaseStudy" layoutRight={layoutRight}>
      <Text layout={layoutRight ? 'rightCol' : 'leftCol'}>
        <Header>Building a mission-oriented product business from the group up</Header>
        <Description>
          Find out how a Red Badger team set about tackling social inequality by building a digital
          platform to connect employers with a diverse talent pool from poorer socioeconomic
          backgrounds.
        </Description>
        <ReadMore />
      </Text>
      <div className={styles.imageWrapper}>
        <img src={heroImg} alt="Mission Beyond" />
      </div>
    </Container>
  );
}
