// @flow
import React from 'react';
import styles from './style.css';

type Font = 'fontXL' | 'fontL' | 'fontM' | 'fontM2';

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

export { H1, H2 };
