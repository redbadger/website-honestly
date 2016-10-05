import React from 'react';
import styles from './style.css';
import InlineSVG from 'svg-inline-react';

/* SVG logo imports */
import bbcSVG from './SVG/bbc.svg';
import bmwSVG from './SVG/bmw.svg';
import camdenSVG from './SVG/camden.svg';
import cartrawlerSVG from './SVG/cartrawler.svg';
import financialTimesSVG from './SVG/financialtimes.svg';
import fortnumSVG from './SVG/fortnum.svg';
import lloydsSVG from './SVG/lloyds.svg';
import selfridgesSVG from './SVG/selfridges.svg';
import skySVG from './SVG/sky.svg';
import tescoSVG from './SVG/tesco.svg';

/* SVG figure imports */
import tescoFigureSVG from './SVG/tesco-figure.svg';
import fortnumFigureSVG from './SVG/fortnum-figure.svg';
import camdenFigureSVG from './SVG/camden-figure.svg';
import skyFigureSVG from './SVG/sky-figure.svg';

const CaseStudy = () => (
  <div className={styles.caseStudyContainer}>
    <h2 className={styles.test}>We solve complex problems and deliver real impact.</h2>
    <div className={styles.figuresContainer}>
      <div>
        <InlineSVG src={fortnumFigureSVG} className={styles.caseFigure} />
        <span className={styles.caseText}>Number of awards for the new online store</span>
        <InlineSVG src={fortnumSVG} className={styles.caseLogo} />
      </div>
      <div>
        <InlineSVG src={camdenFigureSVG} className={styles.caseFigure} />
        <span className={styles.caseText}>Weeks to deliver a new online platform</span>
        <InlineSVG src={camdenSVG} className={styles.caseLogo} />
      </div>
      <div>
        <InlineSVG src={skyFigureSVG} className={styles.caseFigure} />
        <span className={styles.caseText}>
          Drop in customers pushing the 'need more help' button
        </span>
        <InlineSVG src={skySVG} className={styles.caseLogo} />
      </div>
      <div>
        <InlineSVG src={tescoFigureSVG} className={styles.caseFigure} />
        <span className={styles.caseText}>
          Increase in number of online orders across 7 countries
        </span>
        <InlineSVG src={tescoSVG} className={styles.caseLogo} />
      </div>
    </div>
      <div className={styles.caseCompanies}>
        <InlineSVG className={styles.caseCompany} src={selfridgesSVG} />
        <InlineSVG className={styles.caseCompany} src={cartrawlerSVG} />
        <InlineSVG className={styles.caseCompany} src={financialTimesSVG} />
        <InlineSVG className={styles.caseCompany} src={bbcSVG} />
        <InlineSVG className={styles.caseCompany} src={bmwSVG} />
        <InlineSVG className={styles.caseCompany} src={lloydsSVG} />
      </div>
      {/* <a className={styles.button}>See more of our work</a> */}
  </div>
);

export default CaseStudy;
