import React from 'react';
import styles from './style.css';
import Link from '../../../components/link';

import camdenLogo from './images/camden_market.png';
import camdenProjectScreenshot from './images/camden.png';

export default () => (
  <div className={styles.caseStudyContainer}>
    <div className={styles.caseStudyContent}>
      <div className={styles.caseStudyTextContainer}>
        <Link to="camdenMarketCaseStudy">
          <img src={camdenLogo} className={styles.camdenLogo} alt="Camden Market logo" />
          <h2 className={styles.caseStudyTextContainerHeader}>
            Taking steps towards a digital future
          </h2>
          <p className={styles.description}>
            Built in just ten weeks, Camdenmarket.com relaunched in May 2016 to drive more footfall
            from Londoners to the physical market by showcasing the eclectic range of goods, food
            and events.
          </p>
          <div className={styles.links}>
            <p className={styles.readmore}>Read more</p>
          </div>
        </Link>
      </div>
      <Link to="camdenMarketCaseStudy" className={styles.imageLink}>
        <img src={camdenProjectScreenshot} alt="Camden project screenshot" />
      </Link>
    </div>
  </div>
);
