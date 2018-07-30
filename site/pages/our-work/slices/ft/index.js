// @flow

import React from 'react';

import sharedStyles from '../shared/styles.css';
import styles from './styles.css';
import Container from '../shared/container';
import ftLogo from './images/ft-logo.png';
import ftProjectImage from './images/meeting.png';

export default () => (
  <Container to="financialTimesCaseStudy" layout="row-reverse">
    <div className={sharedStyles.textContainer}>
      <div>
        <img src={ftLogo} className={styles.clientLogo} alt="Financial Times logo" />
        <h2 className={sharedStyles.textContainerHeader}>Lasting change for a media giant</h2>
        <p className={sharedStyles.description}>
          The Financial Times (FT) is one of the world’s best known and most respected news
          publications. The ‘pink paper’ has a good existing online offering with total circulation
          of over 750k readers, including 550k corporate memberships.
        </p>
        <div className={sharedStyles.links}>
          <p className={sharedStyles.readmore}>Read more</p>
        </div>
      </div>
    </div>
    <div className={styles.imageWrapper}>
      <img src={ftProjectImage} alt="Financial Times project snapshot" />
    </div>
  </Container>
);
