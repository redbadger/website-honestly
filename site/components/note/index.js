// @flow
import * as React from 'react';
import styles from './style.css';

type NoteProps = {
  children: React.Node,
};

export default function Note({ children }: NoteProps) {
  return <div className={styles.note}>{children}</div>;
}
