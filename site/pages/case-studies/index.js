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
        <h2>The proof is in the pudding.</h2>
        <h2>Read some of our case studies.</h2>
      </div>
      <div className={styles.caseStudyContainer}>
        <img alt="The logo of Fortnum & Masons" src={fortnumJPG} />
        <h2 className={styles.caseStudyCompany}>Fortnum & Mason</h2>
        <h2 className={styles.caseStudyTitle}>Elegant e-commerce in eight months</h2>
        <h2 className={styles.caseStudyDescription}>
          Improving online and mobile conversion rates on the new fortnumandmason.com
          site with great customer experience and innovative tech.
        </h2>
      </div>
      <div className={cx('caseStudyContainer', 'inverse')}>
        <img alt="The Camden Market App" src={camdenJPG} />
        <h2 className={styles.caseStudyCompany}>Camden Market</h2>
        <h2 className={styles.caseStudyTitle}>Taking steps towards a digital future</h2>
        <h2 className={styles.caseStudyDescription}>
          Built in just ten weeks, Camdenmarket.com relaunched in May 2016 to drive
          more footfall from Londoners to the physical market by
          showcasing the eclectic range of goods, food and events.
        </h2>
      </div>
      <div className={styles.caseStudyContainer}>
        <img alt="Financial Times website on a tablet" src={financialTimesJPG} />
        <h2 className={styles.caseStudyCompany}>Financial Times</h2>
        <h2 className={styles.caseStudyTitle}>Lasting change for a media giant</h2>
        <h2 className={styles.caseStudyDescription}>
          Improving online and mobile conversion rates on the new fortnumandmason.com
          site with great customer experience and innovative tech.
        </h2>
      </div>
    </div>
  );
}
