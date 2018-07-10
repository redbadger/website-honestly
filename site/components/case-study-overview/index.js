// @flow

import React from 'react';
import InlineSVG from 'svg-inline-react';
import moment from 'moment';
import ReactGA from 'react-ga';

import styles from './style.css';
import fortnumPNG from './PNG/fortnum.png';
import financialTimesPNG from './PNG/financialtimes.png';
import arrowSVG from '../../../assets/images/SVG/arrow.svg';

import Link from '../link';
import CaseStudyCompanyLogos from '../case-study-company-logos';

const trackStatClicks = company => () =>
  ReactGA.event({
    category: `Key stats ${company}`,
    action: 'click',
    label: 'Case Study',
  });

const trackSeeMoreWorkClicks = () =>
  ReactGA.event({
    category: `See more of our work`,
    action: 'click',
    label: 'Case Study',
  });

const daysSinceFortumStarted = () => {
  const startDate = moment([2014, 4, 14]);
  const today = moment();
  const diffInDays = today.diff(startDate, 'days');

  return diffInDays.toLocaleString();
};

const CaseStudyOverview = () => (
  // The id here is to allow us to link directly to the page stats
  <section className={styles.caseStudyContainer} id="stats">
    <h2 className={styles.heading}>We solve complex problems and deliver real impact.</h2>
    <div className={styles.limitWidth}>
      <div className={styles.figuresContainer}>
        <a
          href="/our-work/case-study/fortnum-and-mason"
          className={styles.figureLink}
          title="Fortnum and mason case study"
          onClick={trackStatClicks('F&M')}
        >
          <span className={styles.statsContainer}>
            <span className={styles.countdownText}>{daysSinceFortumStarted()}</span>
            <span className={styles.countdownCaseText}>
              days of innovation and continuous{' '}
              <span className={styles.lastWord}>
                deployment
                <InlineSVG src={arrowSVG} className={styles.arrow} />
              </span>
            </span>
          </span>
          <span className={styles.logoContainer}>
            <img alt="The logo of Fortnum & Masons" src={fortnumPNG} className={styles.logo} />
          </span>
        </a>
        <a
          href="our-work/case-study/retailer"
          className={styles.figureLink}
          title="Retailer case study"
          onClick={trackStatClicks('Tesco')}
        >
          <span className={styles.statsContainer}>
            <span className={styles.centerText}>
              Five months to clear an eight year{' '}
              <span className={styles.lastWord}>
                backlog
                <InlineSVG src={arrowSVG} className={styles.arrow} />
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
          onClick={trackStatClicks('Giant Global Bank')}
        >
          <span className={styles.statsContainer}>
            <span className={styles.centerText}>
              Catalysts for change, delivery deployment and{' '}
              <span className={styles.lastWord}>
                culture
                <InlineSVG src={arrowSVG} className={styles.arrow} />
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
          onClick={trackStatClicks('Financial Times')}
        >
          <span className={styles.statsContainer}>
            <span className={styles.countdownText}>30%</span>
            <span className={styles.caseText}>
              uplift in reader{' '}
              <span className={styles.lastWord}>
                engagement
                <InlineSVG src={arrowSVG} className={styles.arrow} />
              </span>
            </span>
          </span>
          <span className={styles.logoContainer}>
            <img
              alt="The logo of the Financial Times"
              src={financialTimesPNG}
              className={styles.logo}
            />
          </span>
        </a>
      </div>
      <CaseStudyCompanyLogos />
      <div className={styles.buttonContainer}>
        <Link to="ourWorkPage" className={styles.button} onClick={trackSeeMoreWorkClicks}>
          See more of our work
        </Link>
      </div>
    </div>
  </section>
);

export default CaseStudyOverview;
