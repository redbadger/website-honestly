// @flow

import React from 'react';
import sharedStyles from '../shared/styles.css';
import styles from './styles.css';
import Link from '../../../../components/link';

import skyLogo from './images/sky.png';

export default function CaseStudySkySlice() {
  return (
    <div className={sharedStyles.container}>
      <div className={styles.content}>
        <div className={styles.textContainer}>
          <Link to="skyCMSCaseStudy">
            <img src={skyLogo} className={styles.clientLogo} alt="Sky logo" />
            <h2 className={styles.textContainerHeader}>
              A modern CMS that is the foundation that supports both customers and the internal team
            </h2>
            <p className={sharedStyles.description}>
              Enabling Sky to manage their content with an amazing customer experience
            </p>
            <div className={styles.links}>
              <p className={sharedStyles.readmore}>Read more</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
