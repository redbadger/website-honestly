// @flow

import React from 'react';
import styles from './styles.css';

import camdenLogo from './images/camden_market.png';
import fmLogo from './images/fortnum-mason-logo.png';
import ftLogo from './images/ft-logo.png';
import skyLogo from './images/sky.png';

type SliceName = 'camden' | 'fm' | 'ft' | 'sky';

type Props = {
  slice: SliceName,
};

const logos = {
  camden: camdenLogo,
  fm: fmLogo,
  ft: ftLogo,
  sky: skyLogo,
};

export default function Logo({ slice }: Props) {
  return <img src={logos[slice]} className={styles[slice]} alt="" />;
}
