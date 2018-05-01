// @flow
import React from 'react';
import styles from './style.css';

type Props = {
  children: string,
};

const XLargeHeading = ({ children }: Props) => <h1 className={styles.h1}>{children}</h1>;

const MediumHeading = ({ children }: Props) => <h3 className={styles.h2}>{children}</h3>;

export { XLargeHeading, MediumHeading };
