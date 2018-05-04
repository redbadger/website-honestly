// @flow
import React from 'react';
import styles from './style.css';

type Font = 'fontXL' | 'fontL' | 'fontM' | 'fontM2' | 'fontS2' | 'fontS' | 'fontXS';

type Props = {
  children: string,
  type: Font,
  customClass?: string,
};

const P = ({ children, type }: Props) => <p className={styles[`${type}`]}>{children}</p>;

P.defaultProps = {
  type: 'fontXS',
};

const H1 = ({ children, type }: Props) => <h1 className={styles[`${type}`]}>{children}</h1>;

H1.defaultProps = {
  type: 'fontXL',
};

const H2 = ({ children, type, customClass }: Props) => (
  <h2 className={(styles[`${type}`], customClass)}>{children}</h2>
);

H2.defaultProps = {
  type: 'fontM',
  customClass: '',
};

const H3 = ({ children, type }: Props) => <h3 className={styles[`${type}`]}>{children}</h3>;

H3.defaultProps = {
  type: 'fontM',
};

export { P, H1, H2, H3 };
