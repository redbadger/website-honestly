// @flow
import React from 'react';

import bbcPNG from './PNG/bbc.png';
import pridePNG from './PNG/pride.png';
import cartrawlerPNG from './PNG/cartrawler.png';
import hsbcPNG from './PNG/hsbc.png';
import selfridgesPNG from './PNG/selfridges.png';
import tescoPNG from './PNG/tesco.png';

import styles from './style.css';

const CaseStudyCompanyLogos = () => (
  <div className={styles.caseCompanies}>
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
