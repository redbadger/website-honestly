// @flow
import * as React from 'react';
import styles from './style.css';

type SectionProps = {
  children: React.Node
};

export default function Section({ children }: SectionProps) {
  return <section className={styles.section}>{children}</section>;
}
