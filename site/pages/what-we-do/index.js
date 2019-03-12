import React from 'react';
import classnames from 'classnames/bind';
import styles from './style.css';
import HeaderSlice from './header-slice';
import LeanAgileSlice from './lean-agile-slice';
import CrossFunctionalSlice from './cross-functional-slice';
import Link from '../../components/link';
import Social from '../../components/social';

import metaImage from './meta-image.jpg';
import bankGif from './GIF/bank.gif';
import financialTimesJpg from './JPG/financialtimes.jpg';
import fortnumJpg from './JPG/fortnum.jpg';

const cx = classnames.bind(styles);

function CaseStudies() {
  return (
    <div>
      <div className={styles.headerContainer}>
        <h2 className={styles.mainHeader}>The proof is in the pudding.</h2>
        <div className={styles.subHeader}>Read some of our case studies.</div>
      </div>

      <div className={styles.caseStudyContainer}>
        <Link className={styles.caseStudyContent} to="fortnumAndMasonCaseStudy">
          <div className={styles.imageWrapper}>
            <img alt="" src={fortnumJpg} />
          </div>
          <div className={styles.caseStudyTextContainer}>
            <div className={cx('caseStudyCompany', 'caseStudyCompany--onBlack')}>
              Fortnum & Mason
            </div>
            <div className={styles.caseStudyTitleContainer}>
              <h3 className={styles.caseStudyTitle}>Elegant e-commerce in eight months</h3>
            </div>
            <p className={styles.caseStudyDescription}>
              Improving online and mobile conversion rates on the new fortnumandmason.com site with
              great customer experience and innovative tech.
            </p>
          </div>
        </Link>
      </div>

      <div className={cx('caseStudyContainer', 'inverse')}>
        <Link className={styles.caseStudyContent} to="bankCaseStudy">
          <div className={cx('imageWrapper', 'bank')}>
            <img alt="" src={bankGif} />
          </div>
          <div className={styles.caseStudyTextContainer}>
            <div className={styles.caseStudyCompany}>Financial services</div>
            <div className={styles.caseStudyTitleContainer}>
              <h3 className={styles.caseStudyTitle}>Digital transformation in retail banking</h3>
            </div>
            <div className={styles.caseStudyDescription}>
              Discover how we delivered quality digital products to customers quickly, built
              capability and changed the culture to increase business efficiency in one of the
              world’s largest banks.
            </div>
          </div>
        </Link>
      </div>

      <div className={styles.caseStudyContainer}>
        <Link className={styles.caseStudyContent} to="financialTimesCaseStudy">
          <div className={styles.imageWrapper}>
            <img alt="" src={financialTimesJpg} />
          </div>
          <div className={styles.caseStudyTextContainer}>
            <div className={cx('caseStudyCompany', 'caseStudyCompany--onBlack')}>
              Financial Times
            </div>
            <div className={styles.caseStudyTitleContainer}>
              <h3 className={styles.caseStudyTitle}>Lasting change for a media giant</h3>
            </div>
            <div className={styles.caseStudyDescription}>
              We helped integrate Lean UX and Agile Design processes across the organisation,
              enabling them to operate at the cutting edge of product delivery.
            </div>
          </div>
        </Link>
      </div>
      <div className={styles.buttonContainer}>
        <Link to="ourWorkPage" className={styles.button}>
          See more of our work
        </Link>
      </div>
    </div>
  );
}

export default function whatWeDo() {
  const social = {
    title: 'What we do | Red Badger',
    description:
      'We help you bring innovative products and services to market through nimble and robust ways of working.',
    metaImage,
    url: 'https://red-badger.com/what-we-do',
  };

  return (
    <div>
      <Social {...social} />
      <HeaderSlice />
      <CrossFunctionalSlice />
      <LeanAgileSlice />
      <CaseStudies />
    </div>
  );
}
