// @flow

import React, { Fragment } from 'react';
import Social from '../../components/social';
import { H1 } from '../../components/text';
import PolicyBox from '../../components/policy/policy-box';
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
