import React from 'react';
import InlineSVG from 'svg-inline-react';
import styles from './style.css';
import Link from '../link';

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
        <a href="https://red-badger.com/our-work/case-study/fortnum-and-mason/">
          <InlineSVG src={fortnumFigureSVG} className={styles.caseFigure} alt="Three" />
        </a>
        <a href="https://red-badger.com/our-work/case-study/fortnum-and-mason/" className={styles.caseText}>
          <span>Number of awards for the new online store</span>
        </a>
        <a href="https://red-badger.com/our-work/case-study/fortnum-and-mason/">
          <img alt="The logo of Fortnum & Masons" src={fortnumPNG} />
        </a>
      </div>
      <div>
        <a href="https://red-badger.com/our-work/case-study/camden-market/">
          <InlineSVG src={camdenFigureSVG} className={styles.caseFigure} alt="Ten" />
        </a>
        <a href="https://red-badger.com/our-work/case-study/camden-market/" className={styles.caseText}>
          <span>Weeks to deliver a new online platform</span>
        </a>
        <a href="https://red-badger.com/our-work/case-study/camden-market/">
          <img alt="The logo of Camden Market" src={camdenPNG} />
        </a>
      </div>
      <div>
        <a href="https://red-badger.com/our-work/case-study/sky-cms/">
          <InlineSVG src={skyFigureSVG} className={styles.caseFigure} alt="50%" />
        </a>
        <a href="https://red-badger.com/our-work/case-study/sky-cms/" className={styles.caseText}>
          <span>
            Drop in customers pushing the &lsquo;need more help&rsquo; button
          </span>
        </a>
        <a href="https://red-badger.com/our-work/case-study/sky-cms/">
          <img alt="The logo of Sky" src={skyPNG} />
        </a>
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
      <Link className={styles.button} to="caseStudiesPage">See more of our work</Link>
    </div>
  </section>
);

export default CaseStudy;
