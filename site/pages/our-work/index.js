import React from 'react';

import styles from './style.css';

import CaseStudyBankSlice from './case-study-bank-slice';
import CaseStudyCarTrawlerSlice from './case-study-car-trawler-slice';
import CaseStudyRetailerSlice from './case-study-retailer-slice';
import CaseStudyCamdenSlice from './case-study-camden-slice';
import CaseStudyFtSlice from './case-study-ft-slice';
import CaseStudyFortnumSlice from './case-study-fortnum-and-mason-slice';
import CaseStudyFortnumDigitalTransformationSlice from './case-study-fortnum-and-mason-digital-transformation-slice';
import CaseStudySkySlice from './case-study-sky-slice';
import ClientLogosSlice from './client-logos-slice';
import CaseStudyCell from './case-study-cell';
import Social from '../../components/social';
import ScrollTracker from '../../components/scroll-tracker';

import metaImage from './meta-image.jpg';
import HallerImage from './images/Hall.jpg';
import HallerLogo from './images/haller.png';
import BmwImage from './images/BM.jpg';
import BmwLogo from './client-logos-slice/images/bmw.png';
import BbcLogo from './client-logos-slice/images/bbc.png';
import SkyLogo from './client-logos-slice/images/sky.png';

export default function CaseStudies() {
  const social = {
    title: 'Our work | Red Badger',
    description:
      'Discover how we’ve helped our clients deliver digital products that make a difference.',
    metaImage,
    altText: "A desktop, tablet and mobile version of some of Red Badger's projects.",
    url: 'https://red-badger.com/our-work',
  };

  return (
    <ScrollTracker>
      <Social {...social} />
      <div className={styles.headerContainer}>
        <div>
          <h1 className={styles.mainHeader}>The proof is in the pudding.</h1>
          <h2 className={styles.mainSlogan}>Read some of our case studies.</h2>
        </div>
      </div>
      <div className={styles.caseStudyTopSection}>
        <div className={styles.topSlicesContainer}>
          <CaseStudyCarTrawlerSlice />
          <CaseStudyBankSlice />
          <CaseStudyRetailerSlice />
          <CaseStudyCamdenSlice />
          <CaseStudyFtSlice />
          <CaseStudyFortnumSlice />
          <CaseStudyFortnumDigitalTransformationSlice />
          <CaseStudySkySlice />
          <ClientLogosSlice />
          <div className={styles.grid}>
            <div className={styles.gridRow}>
              <CaseStudyCell
                clientName="BBC"
                clientLogo={BbcLogo}
                headerText="Delivering a better customer experience, faster"
                descriptionText="How the rapid prototyping model helped the BBC to uncover new ways to engage its audience."
                routeKey="bbcCaseStudy"
              />
              <CaseStudyCell
                clientName="Sky"
                clientLogo={SkyLogo}
                headerText="Helping customers help themselves"
                descriptionText="Enabling Sky to deliver continual improvement across customer services"
                routeKey="skyCaseStudy"
              />
            </div>
            <div className={styles.gridRow}>
              <CaseStudyCell
                clientName="Haller"
                clientLogo={HallerLogo}
                image={HallerImage}
                headerText="Developing technology for good"
                descriptionText="Red Badger teamed up with the Haller Foundation on a pro-bono basis to develop a mobile application which helps Kenyan farmers."
                routeKey="hallerCaseStudy"
              />
              <CaseStudyCell
                clientName="BMW"
                clientLogo={BmwLogo}
                image={BmwImage}
                headerText="The shortcut between you and the museum"
                descriptionText="Pushing the boundaries of HTML5 technology to deliver a multi-platform 3D tour of the BMW Museum."
                routeKey="bmwCaseStudy"
              />
            </div>
          </div>
        </div>
      </div>
    </ScrollTracker>
  );
}
