// @flow

import React from 'react';
import styles from './styles.css';

type Props = {
  center?: boolean,
};

export default function ReadMore({ center = false }: Props) {
  return (
    <div className={center ? styles.linksCenter : styles.links}>
      <p className={styles.readmore}>Read more</p>
    </div>
  );
}
