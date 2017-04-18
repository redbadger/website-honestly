import React from 'react';
import styles from './style.css';

import Link from '../../../../site/components/link';
import retailerImage from './images/retailer.png';

export default () => (
  <div className={styles.caseStudyContainer} >
    <div className={styles.caseStudyContent}>
      <div className={styles.caseStudyTextContainer} >
        <Link to='retailerCaseStudy' navigationData={{ retailer: 'retailer' }}>
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
      <Link to='retailerCaseStudy' navigationData={{ retailer: 'retailer' }} className={styles.imageLink}>
        <div className={styles.imageContainer}>
          <img src={retailerImage} alt="Retail giant project snapshot" />
          <div className={styles.orders}>
            <div className={styles.imagePercentage}>+54%</div>
            <div className={styles.imageText}>Increased orders</div>
          </div>
          <div className={styles.visits}>
            <div className={styles.imagePercentage}>+29%</div>
            <div className={styles.imageText}>Uplift in visits</div>
          </div>
        </div>
      </Link>
    </div>
  </div>
);
