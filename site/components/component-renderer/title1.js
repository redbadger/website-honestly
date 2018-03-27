// @flow
import * as React from 'react';
import styles from './styles.css';

type Title1Props = {
  children?: React.Node
};

export default function Title1({ children }: Title1Props) {
  return <h1 className={styles.h1}>{children}</h1>;
}
