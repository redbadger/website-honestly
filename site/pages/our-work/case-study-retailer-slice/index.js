import React from 'react';
import styles from './style.css';

import retailerImage from './images/retailer.png';

const caseStudyUrl = '/our-work/case-study/retailer';

export default () => (
  <div className={styles.caseStudyContainer} >
    <div className={styles.caseStudyContent}>
      <div className={styles.caseStudyTextContainer} >
        <a href={caseStudyUrl}>
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
        </a>
      </div>
      <a href={caseStudyUrl} className={styles.imageLink}>
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
      </a>
    </div>
  </div>
);
