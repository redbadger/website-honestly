// @flow

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
      <H2 type="fontM2" customClass={styles.mb10}>
        {heading}
      </H2>
      {body()}
    </div>
  </li>
);

const CookiePolicyPage = () => {
  return (
    <Fragment>
      <Social {...social} />
      <div className={styles.container}>
        <H1 type="fontL" customClass={styles.mb10}>
          Cookies Policy
        </H1>
        <p className={styles.effectiveDate}>Effective as from: 24 May 2018</p>
        <ol>{policies.map(policy => <PolicyBox key={policy.number} {...policy} />)}</ol>
      </div>
    </Fragment>
  );
};

export default CookiePolicyPage;
