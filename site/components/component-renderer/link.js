// @flow
import * as React from 'react';
import styles from './styles.css';

type LinkProps = {
  children?: React.Node,
  href: string,
};

export default function Link({ children, href }: LinkProps) {
  return (
    <a className={styles.a} href={href}>
      {children}
    </a>
  );
}
