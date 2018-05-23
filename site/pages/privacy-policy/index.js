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
  number: string,
  body: Function,
};

type Policy = {
  number: string,
  heading: string,
  body?: Function,
  statements: Array<StatementT>,
};

const Statement = ({ number, body }: StatementT) => (
  <li className={styles.box}>
    <div className={styles.numberContainer}>
      <span className={styles.statementNumber}>{number}</span>
    </div>
    <div className={styles.policyText}>{body()}</div>
  </li>
);

const PolicyBox = ({ number, heading, body, statements }: Policy) => (
  <li>
    <div className={styles.box}>
      <div className={styles.numberContainer}>
        <span className={styles.number}>{number}</span>
      </div>
      <div>
        <H2 type="fontM2" customClass={styles.mb20}>
          {heading}
        </H2>
        {body && body()}
      </div>
    </div>
    <ol>{statements.map(statement => <Statement key={statement.number} {...statement} />)}</ol>
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
        <p className={styles.effectiveDate}>Effective as from: 23 May 2018</p>
        <ol>{policies.map(policy => <PolicyBox key={policy.number} {...policy} />)}</ol>
      </div>
    </Fragment>
  );
};

export default PrivacyPolicyPage;
