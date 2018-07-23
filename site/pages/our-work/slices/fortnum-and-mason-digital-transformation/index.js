// @flow

import React from 'react';
import sharedStyles from '../shared/styles.css';
import styles from './styles.css';
import Link from '../../../../components/link';

import fmLogo from './images/fortnum-mason-logo.png';

export default function CaseStudyFortnumDigitalTransformationSlice() {
  return (
    <div className={sharedStyles.container}>
      <div className={styles.content}>
        <div className={styles.textContainer}>
          <Link to="fMTeaCaseStudy">
            <img src={fmLogo} className={styles.clientLogo} alt="Fortnum and Mason logo" />
            <h2 className={styles.textContainerHeader}>
              The ongoing digital transformation of a 310-year old retailer
            </h2>
            <p className={sharedStyles.description}>
              Discover how we helped customers find products faster and drive sales of tea.
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
