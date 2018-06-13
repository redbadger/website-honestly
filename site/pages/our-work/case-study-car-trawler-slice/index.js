import React from 'react';
import styles from './style.css';
import { CaseStudySliceContainer } from '../case-study/case-study-components';

import carTrawlerImage from './images/carTrawler.jpg';

const CarTrawlerSlice = () => (
  <CaseStudySliceContainer to="carTrawlerCaseStudy">
    <div className={styles.caseStudyTextContainer}>
      <div>
        <h2 className={styles.caseStudyTextContainerHeader}>
          Creating complete CMS control for a Travel technology platform
        </h2>
        <p className={styles.description}>
          Find out how we demonstrated value with a working prototype in one week and delivered a
          complete CMS control for travel brands within only 5 months.
        </p>
        <div className={styles.links}>
          <p className={styles.readmore}>Read more</p>
        </div>
      </div>
    </div>
    <div className={styles.imageWrapper}>
      <div className={styles.imageContainer}>
        <img src={carTrawlerImage} alt="Retail giant project snapshot" />
      </div>
    </div>
  </CaseStudySliceContainer>
);

export default CarTrawlerSlice;
