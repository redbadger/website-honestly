// @flow
import React from 'react';
import styles from './style.css';

type Font = 'fontXL' | 'fontL' | 'fontM' | 'fontM2' | 'fontS2' | 'fontS';

type Props = {
  children: string,
  type: Font,
};

const H1 = ({ children, type }: Props) => <h1 className={styles[`${type}`]}>{children}</h1>;

H1.defaultProps = {
  type: 'fontXL',
};

const H2 = ({ children, type }: Props) => <h2 className={styles[`${type}`]}>{children}</h2>;

H2.defaultProps = {
  type: 'fontM',
};

const H3 = ({ children, type }: Props) => <h3 className={styles[`${type}`]}>{children}</h3>;

H2.defaultProps = {
  type: 'fontM',
};

export { H1, H2, H3 };
