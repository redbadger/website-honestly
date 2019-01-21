// @flow
import * as React from 'react';
import styles from './style.css';

type Font = 'fontXL' | 'fontL' | 'fontM' | 'fontM2' | 'fontS2' | 'fontS' | 'fontXS';

type Props = {
  children: React.Node,
  type?: Font,
  customClass?: string,
};

const P = ({ children, type = 'fontXS', customClass = '' }: Props) => (
  <p className={`${styles[`${type}`]} ${customClass}`}>{children}</p>
);
const H1 = ({ children, type = 'fontXL', customClass = '' }: Props) => (
  <h1 className={`${styles[`${type}`]} ${customClass}`}>{children}</h1>
);
const H2 = ({ children, type = 'fontM', customClass = '' }: Props) => (
  <h2 className={`${styles[`${type}`]} ${customClass}`}>{children}</h2>
);
const H3 = ({ children, type = 'fontM', customClass = '' }: Props) => (
  <h3 className={`${styles[`${type}`]} ${customClass}`}>{children}</h3>
);

export { P, H1, H2, H3 };
