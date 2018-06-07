// @flow

import * as React from 'react';
import Social from '../social';
import { H1 } from '../text';
import PolicyBox from './policy-box';
import styles from './style.css';

import type { SocialProps } from '../social';

type Props = {
  social: SocialProps,
  policies: Array<{ heading: string, body?: () => React.Node }>,
  effectiveDate: string,
  title: string,
};

const Policy = ({ title, effectiveDate, social, policies }: Props) => {
  return (
    <React.Fragment>
      <Social {...social} />
      <div className={styles.container}>
        <H1 type="fontL" customClass={styles.mb10}>
          {title}
        </H1>
        <p className={styles.effectiveDate}>Effective as from: {effectiveDate}</p>
        <ol>
          {policies.map((policy, index) => (
            <PolicyBox key={policy.heading} policyIndex={index + 1} {...policy} />
          ))}
        </ol>
      </div>
    </React.Fragment>
  );
};

export default Policy;
