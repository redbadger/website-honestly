import React from 'react';
import styles from './style.css';
import Link from '../../../components/link';

import retailerImage from './images/retailer.png';

export default () => (
  <div className={styles.caseStudyContainer} >
    <div className={styles.caseStudyContent}>
      <div className={styles.caseStudyTextContainer} >
        <Link to="ourWorkPage">
          <h2 className={styles.caseStudyTextContainerHeader}>
            Next generation platform for retail giant
          </h2>
          <p className={styles.description}>
            Find out how we helped clear a five year backlog in eight months
            and delivered a mobile first application across seven countries.
          </p>
          <div className={styles.links}>
            <p className={styles.readmore}>Read more</p>
          </div>
        </Link>
      </div>
      <Link to="ourWorkPage" className={styles.imageLink}>
        <img src={retailerImage} alt="Retail giant project snapshot" />
      </Link>
    </div>
  </div>
);
