import React from 'react';
import styles from './style.css';

import CaseStudyCamdenSlice from './case-study-camden-slice';
import CaseStudyFtSlice from './case-study-ft-slice';
import CaseStudyFortnumSlice from './case-study-fortnum-and-mason-slice';

export default function CaseStudies() {
  return (
    <div>
      <div className={styles.headerContainer} >
        <div>
          <h1 className={styles.mainHeader} >
            The proof is in the pudding.
          </h1>
          <p className={styles.mainSlogan}>
            Read some of our case studies.
          </p>
        </div>
      </div>
      <div className={styles.caseStudyTopSection}>
        <div className={styles.topSlicesContainer}>
          <CaseStudyCamdenSlice />
          <CaseStudyFtSlice />
          <CaseStudyFortnumSlice />
        </div>
      </div>
    </div>
  );
}
