import React from 'react';
import styles from './style.css';
import Link from '../../../components/link';

import bankGif from './images/bank.gif';

export default () => (
  <div className={styles.caseStudyContainer}>
    <Link className={styles.caseStudyContent} to="bankCaseStudy">
      <div className={styles.caseStudyTextContainer}>
        <div>
          <h2 className={styles.caseStudyTextContainerHeader}>
            Digital transformation in retail banking
          </h2>
          <p className={styles.description}>
            Discover how we delivered quality digital products to customers quickly, built
            capability and changed the culture to increase business efficiency in one of the world’s
            largest banks.
          </p>
          <div className={styles.links}>
            <p className={styles.readmore}>Read more</p>
          </div>
        </div>
      </div>
      <div className={styles.imageWrapper}>
        <img className={styles.projectBigSmallSnapshot} src={bankGif} alt="Bank project snapshot" />
      </div>
    </Link>
  </div>
);
