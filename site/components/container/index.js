// @flow
/*
* This component is ported from Website Next and is meant to be
* used only by Jobs and Events components
*/

import * as React from 'react';
import styles from './style.css';

type ContainerProps = {
  children: React.Node,
};

const Container = ({ children }: ContainerProps) => (
  <div className={styles.wrapper}>
    <div className={styles.container}>{children}</div>
  </div>
);

export default Container;
