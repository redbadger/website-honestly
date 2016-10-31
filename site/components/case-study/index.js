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
import ftFigureSVG from './SVG/ft-figure.svg';
import fortnumFigureSVG from './SVG/fortnum-figure.svg';
import camdenFigureSVG from './SVG/camden-figure.svg';
import skyFigureSVG from './SVG/sky-figure.svg';

const CaseStudy = () => (
  <section className={styles.caseStudyContainer}>
    <h2 className={styles.heading}>We solve complex problems and deliver real impact.</h2>
    <div className={styles.figuresContainer}>
      <div>
        <a href="/our-work/case-study/fortnum-and-mason/">
          <InlineSVG src={fortnumFigureSVG} className={styles.caseFigure} alt="Three" />
        </a>
        <a href="/our-work/case-study/fortnum-and-mason/" className={styles.caseText}>
          <span>Number of awards for the new online store</span>
        </a>
        <a href="/our-work/case-study/fortnum-and-mason/">
          <img alt="The logo of Fortnum & Masons" src={fortnumPNG} />
        </a>
      </div>
      <div>
        <a href="/our-work/case-study/camden-market/">
          <InlineSVG src={camdenFigureSVG} className={styles.caseFigure} alt="Ten" />
        </a>
        <a href="/our-work/case-study/camden-market/" className={styles.caseText}>
          <span>Drop in bounce rate within 4 days</span>
        </a>
        <a href="/our-work/case-study/camden-market/">
          <img alt="The logo of Camden Market" src={camdenPNG} />
        </a>
      </div>
      <div>
        <a href="/our-work/case-study/sky-cms/">
          <InlineSVG src={skyFigureSVG} className={styles.caseFigure} alt="50%" />
        </a>
        <a href="/our-work/case-study/sky-cms/" className={styles.caseText}>
          <span>
            Drop in customers pushing the &lsquo;need more help&rsquo; button
          </span>
        </a>
        <a href="/our-work/case-study/sky-cms/">
          <img alt="The logo of Sky" src={skyPNG} />
        </a>
      </div>
      <div>
        <a href="/our-work/case-study/financial-times/">
          <InlineSVG src={ftFigureSVG} className={styles.caseFigure} alt="Seven" />
        </a>
        <a href="/our-work/case-study/financial-times/" className={styles.caseText}>
          <span>
            7 weeks to redesign and deliver MVP homepage
          </span>
        </a>
        <a href="/our-work/case-study/financial-times/">
          <img alt="The logo of the Financial Times" src={financialTimesPNG} />
        </a>
      </div>
    </div>
    <div className={styles.caseCompanies}>
      <img alt="The logo of Selfridges" src={selfridgesPNG} />
      <img alt="The logo of Tesco" src={tescoPNG} />
      <img alt="The logo of the BBC" src={bbcPNG} />
      <img alt="The logo of BMW" src={bmwPNG} />
      <img alt="The logo of Lloyds Bank" src={lloydsPNG} />
      <img alt="The logo of Car Trawler" src={cartrawlerPNG} />
    </div>
    <div className={styles.buttonContainer}>
      <a className={styles.button} href="/our-work/">See more of our work</a>
    </div>
  </section>
);

export default CaseStudy;
