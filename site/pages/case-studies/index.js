import React from 'react';
import classnames from 'classnames/bind';
import styles from './style.css';

/* PNG and JPG  imports */
import camdenJPG from './PNG/camden.jpg';
import financialTimesJPG from './PNG/financialtimes.jpg';
import fortnumJPG from './PNG/fortnum.jpg';

const cx = classnames.bind(styles);

export default function caseStudies() {
  return (
    <div>
      <div className={styles.headerContainer}>
        <h1 className={styles.mainHeader}>The proof is in the pudding.</h1>
        <h2 className={styles.subHeader}>Read some of our case studies.</h2>
      </div>
      <div className={styles.caseStudyContainer}>
        <a className={styles.imageLink} href="https://red-badger.com/our-work/case-study/fortnum-and-mason/">
          <img alt="The logo of Fortnum & Masons" src={fortnumJPG} />
        </a>
        <div className={styles.caseStudyTextContainer}>
          <a className={styles.caseStudyCompany} href="https://red-badger.com/our-work/case-study/fortnum-and-mason/">Fortnum & Mason</a>
          <span className={styles.caseStudyTitleContainer}>
            <a className={styles.caseStudyTitle} href="https://red-badger.com/our-work/case-study/fortnum-and-mason/">Elegant e-commerce in eight months</a>
          </span>
          <a className={styles.caseStudyDescription} href="https://red-badger.com/our-work/case-study/fortnum-and-mason/">
            Improving online and mobile conversion rates on the new fortnumandmason.com
            site with great customer experience and innovative tech.
          </a>
        </div>
      </div>
      <div className={cx('caseStudyContainer', 'inverse')}>
        <a className={cx('imageLink', 'camden')} href="https://red-badger.com/our-work/case-study/camden-market/">
          <img alt="The Camden Market App" src={camdenJPG} />
        </a>
        <div className={styles.caseStudyTextContainer}>
          <a className={styles.caseStudyCompany} href="https://red-badger.com/our-work/case-study/camden-market/">Camden Market</a>
          <span className={styles.caseStudyTitleContainer}>
            <a className={styles.caseStudyTitle} href="https://red-badger.com/our-work/case-study/camden-market/">Taking steps towards a digital future</a>
          </span>
          <a className={styles.caseStudyDescription} href="https://red-badger.com/our-work/case-study/camden-market/">
            Built in just ten weeks, Camdenmarket.com relaunched in May 2016 to drive
            more footfall from Londoners to the physical market by
            showcasing the eclectic range of goods, food and events.
          </a>
        </div>
      </div>
      <div className={styles.caseStudyContainer}>
        <a className={styles.imageLink} href="https://red-badger.com/our-work/case-study/financial-times/">
          <img alt="Financial Times website on a tablet" src={financialTimesJPG} />
        </a>
        <div className={styles.caseStudyTextContainer}>
          <a className={styles.caseStudyCompany} href="https://red-badger.com/our-work/case-study/financial-times/">Financial Times</a>
          <span className={styles.caseStudyTitleContainer}>
            <a className={styles.caseStudyTitle} href="https://red-badger.com/our-work/case-study/financial-times/">Lasting change for a media giant</a>
          </span>
          <a className={styles.caseStudyDescription} href="https://red-badger.com/our-work/case-study/financial-times/">
            Improving online and mobile conversion rates on the new fortnumandmason.com
            site with great customer experience and innovative tech.
          </a>
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <a className={styles.button} href="https://red-badger.com/our-work/">See more of our work</a>
      </div>
    </div>
  );
}
