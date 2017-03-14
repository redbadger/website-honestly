import React from 'react';
import styles from './style.css';

import fmLogo from './images/fortnum-mason-logo.png';
import fmProjectSnapshot from './images/fortnum.png';
import fmProjectMediumSnapshot from './images/fortnum-medium.png';

const caseStudyUrl = '/our-work/case-study/fortnum-and-mason/';

export default () => (
  <div className={styles.caseStudyContainer} >
    <div className={styles.caseStudyContent}>
      <div className={styles.caseStudyTextContainer} >
        <a href={caseStudyUrl}>
          <img src={fmLogo} className={styles.clientLogo} alt="Fortnum and Mason logo" />
          <h2 className={styles.caseStudyTextContainerHeader}>
            Fortnum & Mason’s new, elegant website increases revenue and conversion rates
          </h2>
          <p className={styles.description}>
            A scalable, highly flexible new site was needed,
            and very quickly to avoid more lost revenue.
          </p>
          <div className={styles.links}>
            <p className={styles.readmore}>Read more</p>
          </div>
        </a>
      </div>
      <a className={styles.imageLink} href={caseStudyUrl}>
        <img className={styles.projectBigSmallSnapshot} src={fmProjectSnapshot} alt="Fortnum and Mason project snapshot" />
        <img className={styles.projectMediumSnapshot} src={fmProjectMediumSnapshot} alt="Fortnum and Mason project snapshot" />
      </a>
    </div>
  </div>
);
