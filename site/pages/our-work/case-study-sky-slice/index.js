import React from 'react';
import styles from './style.css';
import Link from '../../../components/link';

import skyLogo from './images/sky.png';

export default function CaseStudySkySlice() {
  return (
    <div className={styles.caseStudyContainer}>
      <div className={styles.caseStudyContent}>
        <div className={styles.caseStudyTextContainer}>
          <Link to="skyCMSCaseStudy">
            <img src={skyLogo} className={styles.clientLogo} alt="Sky logo" />
            <h2 className={styles.caseStudyTextContainerHeader}>
              A modern CMS that is the foundation that supports both customers and the internal team
            </h2>
            <p className={styles.description}>
              Enabling Sky to manage their content with an amazing customer experience
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
