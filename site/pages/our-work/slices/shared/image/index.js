// @flow

import * as React from 'react';
import styles from './styles.css';

type Props = {
  src: string,
  alt: string,
};

export default function Image({ src, alt }: Props) {
  return (
    <div className={styles.base}>
      <img src={src} alt={alt} />
    </div>
  );
}
