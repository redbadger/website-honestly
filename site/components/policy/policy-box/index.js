// @flow

import React from 'react';

import Statements from '../statements';
import { H2 } from '../../text';

import styles from './style.css';

type StatementT = {
  body: Function,
};

export type PolicyT = {
  policyIndex: number,
  heading: string,
  body?: Function,
  statements?: Array<StatementT>,
};

const padNumber = (n: number) => (n < 10 ? '0' + n : +n);

const PolicyBox = ({ heading, body, statements = [], policyIndex }: PolicyT) => {
  const hasStatements = statements.length > 0;
  const wrapperClass = hasStatements ? '' : styles.policyText;

  return (
    <li>
      <div className={styles.box}>
        <div className={styles.numberContainer}>
          <span className={styles.number}>{padNumber(policyIndex)}</span>
        </div>
        <div className={wrapperClass}>
          <H2 type="fontM2" customClass={styles.mb10}>
            {heading}
          </H2>
          {body && body()}
        </div>
      </div>
      {hasStatements && <Statements statements={statements} policyIndex={policyIndex} />}
    </li>
  );
};

export default PolicyBox;
