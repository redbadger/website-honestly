// @flow

import React from 'react';

import styles from './style.css';

import SharethymeSlice from './slices/sharethyme';
import BankSlice from './slices/bank';
import CarTrawlerSlice from './slices/car-trawler';
import RetailerSlice from './slices/retailer';
import CamdenSlice from './slices/camden';
import CarTrawlerSliceMyAccount from './slices/car-trawler-my-account';
import FtSlice from './slices/ft';
import FortnumSlice from './slices/fortnum-and-mason';
import FortnumDigitalTransformationSlice from './slices/fortnum-and-mason-digital-transformation';
import SkySlice from './slices/sky';
import Pride from './slices/pride';
import Fidelity from './slices/fidelity';

import { BBCCell, SkyCell, HallerCell, BMWCell } from './cells';
import Logos from './logos';

import Social from '../../components/social';
import ScrollTracker from '../../components/scroll-tracker';

import metaImage from './meta-image.jpg';

export default function CaseStudies() {
  const social = {
    title: 'Our work | Red Badger',
    description:
      'Discover how we’ve helped our clients deliver digital products that make a difference.',
    metaImage,
    altText: "A desktop, tablet and mobile version of some of Red Badger's projects.",
    url: 'https://red-badger.com/our-work',
  };

  const slices = [
    SharethymeSlice,
    Pride,
    CarTrawlerSlice,
    Fidelity,
    BankSlice,
    CarTrawlerSliceMyAccount,
    RetailerSlice,
    CamdenSlice,
    FtSlice,
    FortnumSlice,
    FortnumDigitalTransformationSlice,
    SkySlice,
    Logos,
  ];

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
          {slices.map((Slice, index) => {
            /* disabled because list is static */
            /* eslint-disable react/no-array-index-key */
            return <Slice key={`caseStudy-${index}`} layoutRight={!(index % 2)} />;
            /* eslint-enable react/no-array-index-key */
          })}

          <div className={styles.grid}>
            <div className={styles.gridRow}>
              <BBCCell />
              <SkyCell />
            </div>
            <div className={styles.gridRow}>
              <HallerCell />
              <BMWCell />
            </div>
          </div>
        </div>
      </div>
    </ScrollTracker>
  );
}
