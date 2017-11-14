import React from 'react';
import styles from './style.css';

import ftLogo from './images/ft-logo.png';
import ftProjectImage from './images/meeting.png';

const caseStudyUrl = '/our-work/case-study/financial-times/';

export default () => (
  <div className={styles.caseStudyContainer}>
    <div className={styles.caseStudyContent}>
      <div className={styles.caseStudyTextContainer}>
        <a href={caseStudyUrl}>
          <img src={ftLogo} className={styles.clientLogo} alt="Financial Times logo" />
          <h2 className={styles.caseStudyTextContainerHeader}>Lasting change for a media giant</h2>
          <p className={styles.description}>
            The Financial Times (FT) is one of the world’s best known and most respected news
            publications. The ‘pink paper’ has a good existing online offering with total
            circulation of over 750k readers, including 550k corporate memberships.
          </p>
          <div className={styles.links}>
            <p className={styles.readmore}>Read more</p>
          </div>
        </a>
      </div>
      <a className={styles.imageLink} href={caseStudyUrl}>
        <img src={ftProjectImage} alt="Financial Times project snapshot" />
      </a>
    </div>
  </div>
);
