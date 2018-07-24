// @flow

import * as React from 'react';
import styles from './styles.css';

type Props = {
  children: React.Node,
};

export default function Header({ children }: Props) {
  return <h2 className={styles.header}>{children}</h2>;
}
