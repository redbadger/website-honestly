// @flow

import React from 'react';
import styles from './style.css';

type StatementWithIndexes = {
  statementIndex: number,
  policyIndex: number,
  body: Function,
};

const Statement = ({ body, statementIndex, policyIndex }: StatementWithIndexes) => (
  <li className={styles.box}>
    <div className={styles.numberContainer}>
      <span className={styles.statementNumber}>{`${policyIndex}.${statementIndex}`}</span>
    </div>
    <div className={styles.policyText}>{body()}</div>
  </li>
);

export default Statement;
