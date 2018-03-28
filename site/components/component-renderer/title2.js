// @flow
import * as React from 'react';
import styles from './styles.css';

type Title2Props = {
  children?: React.Node,
};

export default function Title2({ children }: Title2Props) {
  return <h2 className={styles.h2}>{children}</h2>;
}
