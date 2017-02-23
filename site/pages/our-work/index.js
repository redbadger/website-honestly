import React from 'react';
import styles from './style.css';

import CaseStudyCamdenSlice from './case-study-camden-slice';
import CaseStudyFtSlice from './case-study-ft-slice';
import CaseStudyFortnumSlice from './case-study-fortnum-and-mason-slice';
import CaseStudySkySlice from './case-study-sky-slice';
import ClientLogosSlice from './client-logos-slice';
import CaseStudyCell from './case-study-cell';

import HallerImage from './images/Hall.jpg';
import HallerLogo from './client-logos-slice/images/haller.png';
import BmwImage from './images/BM.jpg';
import BmwLogo from './client-logos-slice/images/bmw.png';
import BbcLogo from './client-logos-slice/images/bbc.png';
import SkyLogo from './client-logos-slice/images/sky.png';

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
      <div className={styles.caseStudyTopSection}>
        <div className={styles.topSlicesContainer}>
          <CaseStudyCamdenSlice />
          <CaseStudyFtSlice />
          <CaseStudyFortnumSlice />
          <CaseStudySkySlice />
          <ClientLogosSlice />
          <div className={styles.grid}>
            <CaseStudyCell
              clientName={'Haller'}
              clientLogo={HallerLogo}
              image={HallerImage}
              headerText={'Developing technology for good'}
              descriptionText={'Red Badger teamed up with the Haller Foundation on a pro-bono basis to develop a mobile application which helps Kenyan farmers.'}
              linkUrl={'/our-work/case-study/haller/'}
            />
            <CaseStudyCell
              clientName={'BMW'}
              clientLogo={BmwLogo}
              image={BmwImage}
              headerText={'The shortcut between you and the museum'}
              descriptionText={'Pushing the boundaries of HTML5 technology to deliver a multi-platform 3D tour of the BMW Museum.'}
              linkUrl={'/our-work/case-study/bmw/'}
            />
            <CaseStudyCell
              clientName={'BBC'}
              clientLogo={BbcLogo}
              headerText={'Delivering a better customer experience, faster'}
              descriptionText={'How the rapid prototyping model helped the BBC to uncover new ways to engage its audience.'}
              linkUrl={'/our-work/case-study/bbc-now/'}
            />
            <CaseStudyCell
              clientName={'Sky'}
              clientLogo={SkyLogo}
              headerText={'Helping customers help themselves'}
              descriptionText={'Enabling Sky to deliver continual improvement across customer services'}
              linkUrl={'/our-work/case-study/sky/'}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
