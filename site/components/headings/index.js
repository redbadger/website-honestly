// @flow
import React from 'react';
import styles from './style.css';

type Props = {
  children: string,
};

const HeadingH1 = ({ children }: Props) => <h1 className={styles.h1}>{children}</h1>;
const HeadingH2 = ({ children }: Props) => <h2 className={styles.h2}>{children}</h2>;

export { HeadingH1, HeadingH2 };
