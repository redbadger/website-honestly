// @flow
/* eslint-disable react/no-unescaped-entities */

import React, { Fragment } from 'react';
import Social from '../../components/social';
import { H1, H2 } from '../../components/text';
import metaImage from '../home/meta-image.jpg';
import styles from './style.css';

import policies from './policy';

const social = {
  title: 'Red Badger',
  description:
    'Let’s make things better. We are digital transformation experts who innovate and deliver.',
  metaImage,
  url: 'cookie-policy',
};

type StatementT = {
  body: Function,
};

type StatementWithIndexes = {
  statementIndex: number,
  policyIndex: number,
  body: Function,
};

type Policy = {
  policyIndex: number,
  heading: string,
  body?: Function,
  statements: Array<StatementT>,
};

const Statement = ({ body, statementIndex, policyIndex }: StatementWithIndexes) => (
  <li className={styles.box}>
    <div className={styles.numberContainer}>
      <span className={styles.statementNumber}>{`${policyIndex}.${statementIndex}`}</span>
    </div>
    <div className={styles.policyText}>{body()}</div>
  </li>
);

const padNumber = (n: number) => (n < 10 ? '0' + n : +n);

const Statements = ({
  statements,
  policyIndex,
}: {
  statements: Array<StatementT>,
  policyIndex: number,
}) => {
  return (
    <ol>
      {statements.map((statement, statementIndex) => (
        <Statement
          key={statementIndex}
          statementIndex={statementIndex + 1}
          policyIndex={policyIndex}
          {...statement}
        />
      ))}
    </ol>
  );
};

const PolicyBox = ({ heading, body, statements, policyIndex }: Policy) => (
  <li>
    <div className={styles.box}>
      <div className={styles.numberContainer}>
        <span className={styles.number}>{padNumber(policyIndex)}</span>
      </div>
      <div>
        <H2 type="fontM2" customClass={styles.mb10}>
          {heading}
        </H2>
        {body && body()}
      </div>
    </div>
    {statements.length > 0 && <Statements statements={statements} policyIndex={policyIndex} />}
  </li>
);

const PrivacyPolicyPage = () => {
  return (
    <Fragment>
      <Social {...social} />
      <div className={styles.container}>
        <H1 type="fontL" customClass={styles.mb10}>
          Red Badger Privacy Statement
        </H1>
        <p className={styles.effectiveDate}>Effective as from: 24 May 2018</p>
        <ol>
          {policies.map((policy, index) => (
            <PolicyBox key={index} policyIndex={index + 1} {...policy} />
          ))}
        </ol>
      </div>
    </Fragment>
  );
};

export default PrivacyPolicyPage;
