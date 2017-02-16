import React from 'react';
import styles from './style.css';

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
    </div>
  );
}
