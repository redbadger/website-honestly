// @flow

import React from 'react';
import styles from './styles.css';

type SliceName = 'camden' | 'fm' | 'ft' | 'sky';

type Props = {
  slice: SliceName,
  src: string,
};

export default function Logo({ slice, src }: Props) {
  return <img src={src} className={styles[slice]} alt="" />;
}
