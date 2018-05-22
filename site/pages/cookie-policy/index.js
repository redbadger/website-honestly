// @flow
/* eslint-disable react/no-unescaped-entities */

import React from 'react';
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

type Policy = {
  number: string,
  heading: string,
  body: Function,
};

const PolicyBox = ({ number, heading, body }: Policy) => (
  <li className={styles.box}>
    <div className={styles.numberContainer}>
      <span className={styles.number}>{number}</span>
    </div>
    <div className={styles.policyText}>
      <H2 type="fontM2" customClass={styles.mb20}>
        {heading}
      </H2>
      {body()}
    </div>
  </li>
);

const CookiePolicyPage = () => {
  return (
    <React.Fragment>
      <Social {...social} />
      <div className={styles.container}>
        <H1 type="fontL" customClass={styles.mb30}>
          Cookies Policy
        </H1>
        <ol>{policies.map(policy => <PolicyBox key={policy.number} {...policy} />)}</ol>
      </div>
    </React.Fragment>
  );
};

export default CookiePolicyPage;
