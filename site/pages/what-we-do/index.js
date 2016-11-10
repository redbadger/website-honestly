import React from 'react';
import classnames from 'classnames/bind';
import styles from './style.css';
import TechSlice from '../../slices/tech-slice';
import TriangleSlice from './triangle-slice';
import LeanSlice from './lean-slice';

import camdenJpg from './JPG/camden.jpg';
import financialTimesJpg from './JPG/financialtimes.jpg';
import fortnumJpg from './JPG/fortnum.jpg';

const cx = classnames.bind(styles);

function CaseStudies() {
  return (
    <div>
      <div className={styles.headerContainer}>
        <h1 className={styles.mainHeader}>The proof is in the pudding.</h1>
        <h2 className={styles.subHeader}>Read some of our case studies.</h2>
      </div>
      <div className={styles.caseStudyContainer}>
        <div className={styles.caseStudyContent}>
          <a className={styles.imageLink} href="/our-work/case-study/fortnum-and-mason/">
            <img alt="The logo of Fortnum & Mason" src={fortnumJpg} />
          </a>
          <div className={styles.caseStudyTextContainer}>
            <a className={styles.caseStudyCompany} href="/our-work/case-study/fortnum-and-mason/">
              Fortnum & Mason
            </a>
            <div className={styles.caseStudyTitleContainer}>
              <a className={styles.caseStudyTitle} href="/our-work/case-study/fortnum-and-mason/">
                Elegant e-commerce in eight months
              </a>
            </div>
            className={styles.caseStudyDescription}
            <a
              href="/our-work/case-study/fortnum-and-mason/"
            >
              Improving online and mobile conversion rates on the new fortnumandmason.com
              site with great customer experience and innovative tech.
            </a>
          </div>
        </div>
      </div>
      <div className={cx('caseStudyContainer', 'inverse')}>
        <div className={styles.caseStudyContent}>
          <a className={cx('imageLink', 'camden')} href="/our-work/case-study/camden-market/">
            <img alt="The Camden Market App" src={camdenJpg} />
          </a>
          <div className={styles.caseStudyTextContainer}>
            <a className={styles.caseStudyCompany} href="/our-work/case-study/camden-market/">
              Camden Market
            </a>
            <div className={styles.caseStudyTitleContainer}>
              <a className={styles.caseStudyTitle} href="/our-work/case-study/camden-market/">
                Taking steps towards a digital future
              </a>
            </div>
            <a className={styles.caseStudyDescription} href="/our-work/case-study/camden-market/">
              Built in just ten weeks, Camdenmarket.com relaunched in May 2016 to drive
              more footfall from Londoners to the physical market by
              showcasing the eclectic range of goods, food and events.
            </a>
          </div>
        </div>
      </div>
      <div className={styles.caseStudyContainer}>
        <div className={styles.caseStudyContent}>
          <a className={styles.imageLink} href="/our-work/case-study/financial-times/">
            <img alt="Financial Times website on a tablet" src={financialTimesJpg} />
          </a>
          <div className={styles.caseStudyTextContainer}>
            <a className={styles.caseStudyCompany} href="/our-work/case-study/financial-times/">
              Financial Times
            </a>
            <div className={styles.caseStudyTitleContainer}>
              <a className={styles.caseStudyTitle} href="/our-work/case-study/financial-times/">
                Lasting change for a media giant
              </a>
            </div>
            <a className={styles.caseStudyDescription} href="/our-work/case-study/financial-times/">
              We helped integrate Lean UX and Agile Design processes across the organisation,
              enabling them to operate at the cutting edge of product delivery.
            </a>
          </div>
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <a className={styles.button} href="/our-work/">See more of our work</a>
      </div>
    </div>
  );
}

export default function whatWeDo() {
  return (
    <div>
      <div className={styles.pageHeaderContainer}>
        <h1 className={styles.pageHeader}>
          Do the right thing.
        </h1>
        <h1 className={styles.pageHeader}>
          Do the thing right.
        </h1>
      </div>
      <TriangleSlice />
      <LeanSlice />
      <TechSlice />
      <CaseStudies />
    </div>
  );
}
