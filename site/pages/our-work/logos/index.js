import React from 'react';
import styles from './style.css';

import anLogo from './images/anthony-nolan.png';
import asosLogo from './images/asos.png';
import atkinsLogo from './images/atkins.png';
import bbcLogo from './images/bbc.png';
import bmwLogo from './images/bmw.png';
import camdenLogo from './images/camden_market.png';
import cartrawlerLogo from './images/cartrawler.png';
import fnfLogo from './images/f_f.png';
import fortnumLogo from './images/fortnum-mason-logo.png';
import ftLogo from './images/ft.png';
import hallerLogo from './images/haller.png';
import hsbcLogo from './images/hsbc.png';
import lloydsLogo from './images/lloyds.png';
import prideLogo from './images/pride.png';
import selfridgesLogo from './images/selfridges.png';
import skyLogo from './images/sky.png';
import tescoLogo from './images/tesco.png';
import wickesLogo from './images/wickes.png';

export default function Logos() {
  return (
    <div className={styles.caseStudyContainer}>
      <div className={styles.caseStudyContent}>
        <img src={hsbcLogo} className={styles.hsbcLogo} alt="HSBC logo" />
        <img src={camdenLogo} className={styles.camdenLogo} alt="Camden Market logo" />
        <img src={ftLogo} className={styles.ftLogo} alt="Financial Times logo" />
        <img src={fortnumLogo} className={styles.fortnumLogo} alt="Fortnum and Mason logo" />
        <img src={anLogo} className={styles.anLogo} alt="Anthony Nolan logo" />
        <img src={skyLogo} className={styles.skyLogo} alt="Sky logo" />
        <img src={cartrawlerLogo} className={styles.cartrawlerLogo} alt="Cartrawler logo" />
        <img src={tescoLogo} className={styles.tescoLogo} alt="Tesco logo" />
        <img src={lloydsLogo} className={styles.lloydsLogo} alt="Lloyds bank logo" />
        <img src={asosLogo} className={styles.asosLogo} alt="Asos logo" />
        <img src={bbcLogo} className={styles.bbcLogo} alt="BBC logo" />
        <img src={prideLogo} className={styles.prideLogo} alt="Pride in London logo" />
        <img src={bmwLogo} className={styles.bmwLogo} alt="BMW logo" />
        <img src={atkinsLogo} className={styles.atkinsLogo} alt="Atkins logo" />
        <img src={wickesLogo} className={styles.wickesLogo} alt="Wickes logo" />
        <img src={selfridgesLogo} className={styles.selfridgesLogo} alt="Selfridges logo" />
        <img src={hallerLogo} className={styles.hallerLogo} alt="Haller logo" />
        <img src={fnfLogo} className={styles.fnfLogo} alt="F&F logo" />
      </div>
    </div>
  );
}
