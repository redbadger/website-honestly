import React from 'react';
import styles from './style.css';
import Link from '../../../../components/link';

import fmLogo from './images/fortnum-mason-logo.png';

export default function CaseStudyFortnumDigitalTransformationSlice() {
  return (
    <div className={styles.caseStudyContainer}>
      <div className={styles.caseStudyContent}>
        <div className={styles.caseStudyTextContainer}>
          <Link to="fMTeaCaseStudy">
            <img src={fmLogo} className={styles.clientLogo} alt="Fortnum and Mason logo" />
            <h2 className={styles.caseStudyTextContainerHeader}>
              The ongoing digital transformation of a 310-year old retailer
            </h2>
            <p className={styles.description}>
              Discover how we helped customers find products faster and drive sales of tea.
            </p>
            <div className={styles.links}>
              <p className={styles.readmore}>Read more</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
