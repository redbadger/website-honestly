import React from 'react';
import classnames from 'classnames/bind';
import styles from './style.css';
import TechSlice from '../../slices/tech-slice';
import LeanAgileSlice from './lean-agile-slice';
import TriangleSlice from './triangle-slice';
import LeanSlice from './lean-slice';
import Link from '../../components/link';
import Social from '../../components/social';

import metaImage from './meta-image.png';
import bankGif from './GIF/bank.gif';
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
          <Link className={styles.imageLink} to="fortnumAndMasonCaseStudy">
            <img alt="The logo of Fortnum & Mason" src={fortnumJpg} />
          </Link>
          <div className={styles.caseStudyTextContainer}>
            <Link className={styles.caseStudyCompany} to="fortnumAndMasonCaseStudy">
              Fortnum & Mason
            </Link>
            <div className={styles.caseStudyTitleContainer}>
              <Link className={styles.caseStudyTitle} to="fortnumAndMasonCaseStudy">
                Elegant e-commerce in eight months
              </Link>
            </div>
            <Link className={styles.caseStudyDescription} to="fortnumAndMasonCaseStudy">
              Improving online and mobile conversion rates on the new fortnumandmason.com site with
              great customer experience and innovative tech.
            </Link>
          </div>
        </div>
      </div>
      <div className={cx('caseStudyContainer', 'inverse')}>
        <div className={styles.caseStudyContent}>
          <Link className={cx('imageLink', 'bank')} to="bankCaseStudy">
            <img alt="Fincancial institution transformation" src={bankGif} />
          </Link>
          <div className={styles.caseStudyTextContainer}>
            <Link
              className={cx('caseStudyCompany', 'caseStudyCompany--onBlack')}
              to="bankCaseStudy"
            >
              Financial services
            </Link>
            <div className={styles.caseStudyTitleContainer}>
              <Link to="bankCaseStudy" className={styles.caseStudyTitle}>
                Digital transformation in retail banking
              </Link>
            </div>
            <Link className={styles.caseStudyDescription} to="bankCaseStudy">
              Discover how we delivered quality digital products to customers quickly, built
              capability and changed the culture to increase business efficiency in one of the
              world’s largest banks.
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.caseStudyContainer}>
        <div className={styles.caseStudyContent}>
          <Link className={styles.imageLink} to="financialTimesCaseStudy">
            <img alt="Financial Times website on a tablet" src={financialTimesJpg} />
          </Link>
          <div className={styles.caseStudyTextContainer}>
            <Link className={styles.caseStudyCompany} to="financialTimesCaseStudy">
              Financial Times
            </Link>
            <div className={styles.caseStudyTitleContainer}>
              <Link className={styles.caseStudyTitle} to="financialTimesCaseStudy">
                Lasting change for a media giant
              </Link>
            </div>
            <Link className={styles.caseStudyDescription} to="financialTimesCaseStudy">
              We helped integrate Lean UX and Agile Design processes across the organisation,
              enabling them to operate at the cutting edge of product delivery.
            </Link>
          </div>
        </div>
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
    title: 'What we do at Red Badger',
    description:
      'Through vision, validation and delivery learn how we use Lean and Technology to make things better.',
    metaImage,
    url: 'https://red-badger.com/what-we-do',
  };

  return (
    <div>
      <Social {...social} />
      <div className={styles.pageHeaderContainer}>
        <h1 className={styles.pageHeader}>Do the right thing.</h1>
        <h1 className={styles.pageHeader}>Do the thing right.</h1>
      </div>
      <LeanAgileSlice />
      <TriangleSlice />
      <LeanSlice />
      <TechSlice />
      <CaseStudies />
    </div>
  );
}
