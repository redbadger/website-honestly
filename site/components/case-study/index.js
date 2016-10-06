import React from 'react';
import InlineSVG from 'svg-inline-react';
import styles from './style.css';

/* PNG logo imports */
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
  <section className={styles.caseStudyContainer}>
    <h2 className={styles.heading}>We solve complex problems and deliver real impact.</h2>
    <div className={styles.figuresContainer}>
      <div>
        <InlineSVG src={fortnumFigureSVG} className={styles.caseFigure} alt="Three" />
        <span className={styles.caseText}>Number of awards for the new online store</span>
        <img alt="The logo of Fortnum & Masons" src={fortnumPNG} />
      </div>
      <div>
        <InlineSVG src={camdenFigureSVG} className={styles.caseFigure} alt="Ten" />
        <span className={styles.caseText}>Weeks to deliver a new online platform</span>
        <img alt="The logo of Camden Market" src={camdenPNG} />
      </div>
      <div>
        <InlineSVG src={skyFigureSVG} className={styles.caseFigure} alt="50%" />
        <span className={styles.caseText}>
          Drop in customers pushing the 'need more help' button
        </span>
        <img alt="The logo of Sky" src={skyPNG} />
      </div>
      <div>
        <InlineSVG src={tescoFigureSVG} className={styles.caseFigure} alt="54%" />
        <span className={styles.caseText}>
          Increase in number of online orders across 7 countries
        </span>
        <img alt="The logo of tesco" src={tescoPNG} />
      </div>
    </div>
    <div className={styles.caseCompanies}>
      <img alt="The logo of Selfridges" src={selfridgesPNG} />
      <img alt="The logo of the Financial Times" src={financialTimesPNG} />
      <img alt="The logo of the BBC" src={bbcPNG} />
      <img alt="The logo of BMW" src={bmwPNG} />
      <img alt="The logo of Lloyds Bank" src={lloydsPNG} />
      <img alt="The logo of Car Trawler" src={cartrawlerPNG} />
    </div>
    <div className={styles.buttonContainer}>
      <a className={styles.button} href="https://red-badger.com/our-work/">See more of our work</a>
    </div>
  </section>
);

export default CaseStudy;
