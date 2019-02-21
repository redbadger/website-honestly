/* eslint-disable new-cap */
// @flow
import React from 'react';
import type { Node } from 'react';
import styles from './style.css';

type Props = {
  children: Node,
};

const Slice = (colour: string) => ({ children }: Props) => (
  <section className={styles[`${colour}`]}>
    <div className={styles.container}>{children}</div>
  </section>
);

const colour = {
  white: 'white',
  green: 'green',
  yellow: 'yellow',
};

const WhiteSlice = Slice(`${colour.white}Slice`);
const GreenSlice = Slice(`${colour.green}Slice`);
const YellowSlice = Slice(`${colour.yellow}Slice`);

export { WhiteSlice, GreenSlice, YellowSlice };
