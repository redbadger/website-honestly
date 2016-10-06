import React from 'react';
import InlineSVG from 'svg-inline-react';
import styles from './style.css';

/* SVG logo imports */
import bbcPNG from './PNG/bbc.png';
import bmwPNG from './PNG/bmw.png';
import camdenPNG from './PNG/camden.png';
import cartrawlerPNG from './PNG/cartrawler.png';
import financialTimesPNG from './PNG/financialtimes.png';
import fortnumPNG from './PNG/fortnum.png';
import lloydsPNG from './PNG/lloyds.png';
import selfridgesPNG from './PNG/selfridges.png';
import skyPNG from './PNG/sky.png';
import tescoPNG from './PNG/tesco.png';

/* SVG figure imports */
import tescoFigureSVG from './SVG/tesco-figure.svg';
import fortnumFigureSVG from './SVG/fortnum-figure.svg';
import camdenFigureSVG from './SVG/camden-figure.svg';
import skyFigureSVG from './SVG/sky-figure.svg';

const CaseStudy = () => (
  <div className={styles.caseStudyContainer}>
    <h2 className={styles.heading}>We solve complex problems and deliver real impact.</h2>
    <div className={styles.figuresContainer}>
      <div>
        <InlineSVG src={fortnumFigureSVG} className={styles.caseFigure} />
        <span className={styles.caseText}>Number of awards for the new online store</span>
        <img alt="Example Alt Here" src={fortnumPNG} className={styles.caseLogo} />
      </div>
      <div>
        <InlineSVG src={camdenFigureSVG} className={styles.caseFigure} />
        <span className={styles.caseText}>Weeks to deliver a new online platform</span>
        <img alt="Example Alt Here" src={camdenPNG} className={styles.caseLogo} />
      </div>
      <div>
        <InlineSVG src={skyFigureSVG} className={styles.caseFigure} />
        <span className={styles.caseText}>
          Drop in customers pushing the 'need more help' button
        </span>
        <img alt="Example Alt Here" src={skyPNG} className={styles.caseLogo} />
      </div>
      <div>
        <InlineSVG src={tescoFigureSVG} className={styles.caseFigure} />
        <span className={styles.caseText}>
          Increase in number of online orders across 7 countries
        </span>
        <img alt="Example Alt Here" src={tescoPNG} className={styles.caseLogo} />
      </div>
    </div>
    <div className={styles.caseCompanies}>
      <img alt="Example Alt Here" className={styles.selfridges} src={selfridgesPNG} />
      <img alt="Example Alt Here" className={styles.financialTimes} src={financialTimesPNG} />
      <img alt="Example Alt Here" className={styles.bbc} src={bbcPNG} />
      <img alt="Example Alt Here" className={styles.bmw} src={bmwPNG} />
      <img alt="Example Alt Here" className={styles.lloyds} src={lloydsPNG} />
      <img alt="Example Alt Here" className={styles.cartrawler} src={cartrawlerPNG} />
    </div>
    <div className={styles.buttonContainer}>
      <a className={styles.button}>See more of our work</a>
    </div>
  </div>
);

export default CaseStudy;
