// @flow

import * as React from 'react';
import styles from './styles.css';

type Props = {
  children: React.Node,
  maxWidth?: boolean,
};

export default function Description({ children, maxWidth }: Props) {
  return <p className={maxWidth ? styles.descriptionMaxWidth : styles.description}>{children}</p>;
}
