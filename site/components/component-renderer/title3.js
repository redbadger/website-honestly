// @flow
import * as React from 'react';
import styles from './styles.css';

type Title3Props = {
  children?: React.Node
};

export default function Title3({ children }: Title3Props) {
  return <h3 className={styles.h3}>{children}</h3>;
}
/*
Title3.propTypes = {
  children: React.PropTypes.node,
};
*/
