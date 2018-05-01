// @flow
import React from 'react';
import styles from './style.css';

type Props = {
  children: string,
};

const XSmallText = ({ children }: Props) => <p className={styles.xSmallText}>{children}</p>;

export { XSmallText };
