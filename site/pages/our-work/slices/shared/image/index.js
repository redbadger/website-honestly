// @flow

import * as React from 'react';
import styles from './styles.css';

type Props = {
  src: string,
  alt: string,
  layout?: 'base | restricted',
};

export default function Image({ src, alt, layout = 'base' }: Props) {
  return (
    <div className={styles[layout]}>
      <img src={src} alt={alt} />
    </div>
  );
}
