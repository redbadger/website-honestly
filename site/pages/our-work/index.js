import React from 'react';
import Helmet from 'react-helmet';

import styles from './style.css';

import CaseStudyCamdenSlice from './case-study-camden-slice';
import CaseStudyFtSlice from './case-study-ft-slice';
import CaseStudyFortnumSlice from './case-study-fortnum-and-mason-slice';
import CaseStudySkySlice from './case-study-sky-slice';
import ClientLogosSlice from './client-logos-slice';

export default function CaseStudies() {
  const title = 'Our work';
  const description = 'Find out how we’ve helped e-commerce, media, financial and technology companies deliver digital products that make a difference.';
  const metaImage = 'https://red-badger.com/assets-honestly/social/our-work-OG.png';
  return (
    <div>
      <Helmet
        meta={[
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:site', content: '@redbadgerteam' },
          { name: 'twitter:title', content: title },
          { name: 'twitter:description', content: description },
          { name: 'twitter:image', content: metaImage },
          { property: 'og:type', content: 'website' },
          { property: 'og:url', content: 'https://red-badger.com/our-work' },
          { property: 'og:title', content: title },
          { property: 'og:image', content: metaImage },
          { property: 'og:description', content: description },
        ]}
      />
      <div className={styles.headerContainer} >
        <div>
          <h1 className={styles.mainHeader} >
            The proof is in the pudding.
          </h1>
          <p className={styles.mainSlogan}>
            Read some of our case studies.
          </p>
        </div>
      </div>
      <div className={styles.caseStudyTopSection}>
        <div className={styles.topSlicesContainer}>
          <CaseStudyCamdenSlice />
          <CaseStudyFtSlice />
          <CaseStudyFortnumSlice />
          <CaseStudySkySlice />
          <ClientLogosSlice />
        </div>
      </div>
    </div>
  );
}
