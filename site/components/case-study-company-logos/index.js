// @flow
/* eslint-disable jsx-a11y/no-static-element-interactions */

import React from 'react';
import ReactGA from 'react-ga';

import bbcPNG from './PNG/bbc.png';
import pridePNG from './PNG/pride.png';
import cartrawlerPNG from './PNG/cartrawler.png';
import hsbcPNG from './PNG/hsbc.png';
import selfridgesPNG from './PNG/selfridges.png';
import tescoPNG from './PNG/tesco.png';

import styles from './style.css';

const trackLogoClicks = () =>
  ReactGA.event({
    category: 'Homepage logos',
    action: 'click',
    label: 'Case Study',
  });

const CaseStudyCompanyLogos = () => (
  <div className={styles.caseCompanies} onClick={trackLogoClicks}>
    <div className={styles.caseCompaniesLogo}>
      <img alt="The logo of Selfridges" src={selfridgesPNG} />
    </div>
    <div className={styles.caseCompaniesLogo}>
      <img alt="The logo of Car Trawler" src={cartrawlerPNG} />
    </div>
    <div className={styles.caseCompaniesLogo}>
      <img alt="The logo of Tesco" src={tescoPNG} />
    </div>
    <div className={styles.caseCompaniesLogo}>
      <img alt="The logo of the BBC" src={bbcPNG} />
    </div>
    <div className={styles.caseCompaniesLogo}>
      <img alt="The logo of Pride" src={pridePNG} />
    </div>
    <div className={styles.caseCompaniesLogo}>
      <img alt="The logo of HSBC" src={hsbcPNG} />
    </div>
  </div>
);

export default CaseStudyCompanyLogos;
