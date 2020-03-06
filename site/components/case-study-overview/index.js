// @flow

import React from 'react';

import styles from './style.css';
import fortnumPNG from './PNG/fortnum.png?sizes[]=180&sizes[]=360&sizes[]=540&sizes[]=288&sizes[]=576&sizes[]=864';
import financialTimesPNG from './PNG/financialtimes.png?sizes[]=169&sizes[]=338&sizes[]=507&sizes[]=270&sizes[]=540&sizes[]=810';

import Link from '../link';
import CaseStudyCompanyLogos from '../case-study-company-logos';
import Arrow from '../icons/arrow';
import daysSinceFortumStarted from './daysSinceFortnumStarted';

const CaseStudyOverview = () => {
  return (
    // The id here is to allow us to link directly to the page stats
    <section className={styles.caseStudyContainer} id="stats" data-cy="case-study-slice">
      <h2 className={styles.heading}>We solve complex problems and deliver real impact.</h2>
      <div className={styles.limitWidth}>
        <div className={styles.figuresContainer}>
          <a
            href="/our-work/case-study/fortnum-and-mason"
            className={styles.figureLink}
            title="Fortnum and mason case study"
          >
            <span className={styles.statsContainer}>
              <span className={styles.countdownText}>{daysSinceFortumStarted()}</span>
              <span className={styles.countdownCaseText}>
                days of innovation and continuous{' '}
                <span className={styles.lastWord}>
                  deployment
                  <div className={styles.arrow}>
                    <Arrow />
                  </div>
                </span>
              </span>
            </span>
            <span className={styles.logoContainer}>
              <img
                alt="The logo of Fortnum &amp; Masons"
                src={fortnumPNG}
                sizes="(min-width: 980px) 288px, 180px"
                srcSet={fortnumPNG.srcSet}
                className={styles.logo}
              />
            </span>
          </a>
          <a
            href="our-work/case-study/retailer"
            className={styles.figureLink}
            title="Retailer case study"
          >
            <span className={styles.statsContainer}>
              <span className={styles.centerText}>
                Five months to clear an eight year{' '}
                <span className={styles.lastWord}>
                  backlog
                  <div className={styles.arrow}>
                    <Arrow />
                  </div>
                </span>
              </span>
            </span>
            <span className={styles.logoContainer}>
              <span className={styles.companyText}>Britain’s Biggest Retailer</span>
            </span>
          </a>
          <a
            href="/our-work/case-study/financial-services-digital-transformation"
            className={styles.figureLink}
            title="Bank case study"
          >
            <span className={styles.statsContainer}>
              <span className={styles.centerText}>
                Catalysts for change, delivery deployment and{' '}
                <span className={styles.lastWord}>
                  culture
                  <div className={styles.arrow}>
                    <Arrow />
                  </div>
                </span>
              </span>
            </span>
            <span className={styles.logoContainer}>
              <span className={styles.companyText}>Giant Global Bank</span>
            </span>
          </a>
          <a
            href="/our-work/case-study/financial-times"
            className={styles.figureLink}
            title="Financial times case study"
          >
            <span className={styles.statsContainer}>
              <span className={styles.countdownText}>30%</span>
              <span className={styles.caseText}>
                uplift in reader{' '}
                <span className={styles.lastWord}>
                  engagement
                  <div className={styles.arrow}>
                    <Arrow />
                  </div>
                </span>
              </span>
            </span>
            <span className={styles.logoContainer}>
              <img
                alt="The logo of the Financial Times"
                src={financialTimesPNG}
                sizes="(min-width: 980px) 270px, 169px"
                srcSet={financialTimesPNG.srcSet}
                className={styles.logo}
              />
            </span>
          </a>
        </div>
        <CaseStudyCompanyLogos />
        <div className={styles.buttonContainer}>
          <Link to="ourWorkPage" className={styles.button} data-cy="ourWorkButton">
            See more of our work
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyOverview;
