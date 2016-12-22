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
    <div className={styles.limitWidth}>
      <h2 className={styles.heading}>We solve complex problems and deliver real impact.</h2>
      <div className={styles.figuresContainer}>
        <a
          href="/our-work/case-study/fortnum-and-mason/"
          className={styles.figureLink}
          title="Fortnum and mason case study"
        >
          <InlineSVG src={fortnumFigureSVG} className={styles.caseFigure} />
          <span className={styles.screenReaderText}>Three</span>
          <span className={styles.caseText}>Number of awards for the new online store</span>
          <img alt="The logo of Fortnum & Masons" src={fortnumPNG} className={styles.logo} />
        </a>
        <a
          href="/our-work/case-study/camden-market/"
          className={styles.figureLink}
          title="Camden market case study"
        >
          <InlineSVG src={camdenFigureSVG} className={styles.caseFigure} />
          <span className={styles.screenReaderText}>18%</span>
          <span className={styles.caseText}>Drop in bounce rate within 4 days of launch</span>
          <img alt="The logo of Camden Market" src={camdenPNG} className={styles.logo} />
        </a>
        <a
          href="/our-work/case-study/sky-cms/"
          className={styles.figureLink}
          title="Sky content management system case study"
        >
          <InlineSVG src={skyFigureSVG} className={styles.caseFigure} />
          <span className={styles.screenReaderText}>50%</span>
          <span className={styles.caseText}>
            Drop in customers pushing the &lsquo;need more help&rsquo; button
          </span>
          <img alt="The logo of Sky" src={skyPNG} className={styles.logo} />
        </a>
        <a
          href="/our-work/case-study/financial-times/"
          className={styles.figureLink}
          title="Financial times case study"
        >
          <InlineSVG src={ftFigureSVG} className={styles.caseFigure} />
          <span className={styles.screenReaderText}>Seven</span>
          <span className={styles.caseText}>
            Weeks to redesign and deliver MVP homepage
          </span>
          <img alt="The logo of the Financial Times" src={financialTimesPNG} className={styles.logo} />
        </a>
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
    </div>
  </section>
);

export default CaseStudy;
