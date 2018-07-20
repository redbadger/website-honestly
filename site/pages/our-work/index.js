import React from 'react';

import styles from './style.css';

import BankSlice from './slices/bank';
import CarTrawlerSlice from './slices/car-trawler';
import RetailerSlice from './slices/retailer';
import CamdenSlice from './slices/camden';
import FtSlice from './slices/ft';
import FortnumSlice from './slices/fortnum-and-mason';
import FortnumDigitalTransformationSlice from './slices/fortnum-and-mason-digital-transformation';
import SkySlice from './slices/sky';

import Cell from './cell';
import Logos from './logos';
import BmwLogo from './logos/images/bmw.png';
import BbcLogo from './logos/images/bbc.png';
import SkyLogo from './logos/images/sky.png';

import Social from '../../components/social';
import ScrollTracker from '../../components/scroll-tracker';

import metaImage from './meta-image.jpg';
import HallerImage from './images/Hall.jpg';
import HallerLogo from './images/haller.png';
import BmwImage from './images/BM.jpg';

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
          <CarTrawlerSlice />
          <BankSlice />
          <RetailerSlice />
          <CamdenSlice />
          <FtSlice />
          <FortnumSlice />
          <FortnumDigitalTransformationSlice />
          <SkySlice />
          <Logos />
          <div className={styles.grid}>
            <div className={styles.gridRow}>
              <Cell
                clientName="BBC"
                clientLogo={BbcLogo}
                headerText="Delivering a better customer experience, faster"
                descriptionText="How the rapid prototyping model helped the BBC to uncover new ways to engage its audience."
                routeKey="bbcCaseStudy"
              />
              <Cell
                clientName="Sky"
                clientLogo={SkyLogo}
                headerText="Helping customers help themselves"
                descriptionText="Enabling Sky to deliver continual improvement across customer services"
                routeKey="skyCaseStudy"
              />
            </div>
            <div className={styles.gridRow}>
              <Cell
                clientName="Haller"
                clientLogo={HallerLogo}
                image={HallerImage}
                headerText="Developing technology for good"
                descriptionText="Red Badger teamed up with the Haller Foundation on a pro-bono basis to develop a mobile application which helps Kenyan farmers."
                routeKey="hallerCaseStudy"
              />
              <Cell
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
