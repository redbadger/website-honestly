import React from 'react';
import styles from './style.css';

import anLogo from './images/anthony-nolan.png';
import asosLogo from './images/asos.png';
import atkinsLogo from './images/atkins.png';
import bbcLogo from './images/bbc.png';
import bmwLogo from './images/bmw.png';
import camdenLogo from './images/camden_market.png';
import cartrawlerLogo from './images/cartrawler.png';
import fidelityLogo from './images/fidelity.png';
import fnfLogo from './images/f_f.png';
import fortnumLogo from './images/fortnum-mason-logo.png';
import ftLogo from './images/ft.png';
import hallerLogo from './images/haller.png';
import lloydsLogo from './images/lloyds.png';
import nhsLogo from './images/nhs.png';
import selfridgesLogo from './images/selfridges.png';
import skyLogo from './images/sky.png';
import tescoLogo from './images/tesco.png';
import wickesLogo from './images/wickes.png';

export default function Logos() {
  return (
    <div className={styles.caseStudyContainer}>
      <div className={styles.caseStudyContent}>
        <div className={styles.logoWrapper}>
          <img src={camdenLogo} className={styles.camdenLogo} alt="Camden Market logo" />
        </div>
        <div className={styles.logoWrapper}>
          <img src={ftLogo} className={styles.ftLogo} alt="Financial Times logo" />
        </div>
        <div className={styles.logoWrapper}>
          <img src={fortnumLogo} className={styles.fortnumLogo} alt="Fortnum and Mason logo" />
        </div>
        <div className={styles.logoWrapper}>
          <img src={anLogo} className={styles.anLogo} alt="Anthony Nolan logo" />
        </div>
        <div className={styles.logoWrapper}>
          <img src={skyLogo} className={styles.skyLogo} alt="Sky logo" />
        </div>
        <div className={styles.logoWrapper}>
          <img src={cartrawlerLogo} className={styles.cartrawlerLogo} alt="Cartrawler logo" />
        </div>
        <div className={styles.logoWrapper}>
          <img src={bbcLogo} className={styles.bbcLogo} alt="BBC logo" />
        </div>
        <div className={styles.logoWrapper}>
          <img src={lloydsLogo} className={styles.lloydsLogo} alt="Lloyds bank logo" />
        </div>
        <div className={styles.logoWrapper}>
          <img src={asosLogo} className={styles.asosLogo} alt="Asos logo" />
        </div>
        <div className={styles.logoWrapper}>
          <img src={tescoLogo} className={styles.tescoLogo} alt="Tesco logo" />
        </div>
        <div className={styles.logoWrapper}>
          <img src={nhsLogo} className={styles.nhsLogo} alt="The NHS" />
        </div>
        <div className={styles.logoWrapper}>
          <img src={bmwLogo} className={styles.bmwLogo} alt="BMW logo" />
        </div>
        <div className={styles.logoWrapper}>
          <img src={atkinsLogo} className={styles.atkinsLogo} alt="Atkins logo" />
        </div>
        <div className={styles.logoWrapper}>
          <img src={wickesLogo} className={styles.wickesLogo} alt="Wickes logo" />
        </div>
        <div className={styles.logoWrapper}>
          <img src={selfridgesLogo} className={styles.selfridgesLogo} alt="Selfridges logo" />
        </div>
        <div className={styles.logoWrapper}>
          <img src={hallerLogo} className={styles.hallerLogo} alt="Haller logo" />
        </div>
        <div className={styles.logoWrapper}>
          <img src={fnfLogo} className={styles.fnfLogo} alt="F&F logo" />
        </div>
        <div className={styles.logoWrapper}>
          <img src={fidelityLogo} className={styles.fidelityLogo} alt="Fidelity logo" />
        </div>
      </div>
    </div>
  );
}
