import React from 'react';
import Helmet from 'react-helmet';

import styles from './style.css';

import CaseStudyCamdenSlice from './case-study-camden-slice';
import CaseStudyFtSlice from './case-study-ft-slice';
import CaseStudyFortnumSlice from './case-study-fortnum-and-mason-slice';
import CaseStudySkySlice from './case-study-sky-slice';
import ClientLogosSlice from './client-logos-slice';
import CaseStudyCell from './case-study-cell';

import HallerImage from './images/Hall.jpg';
import HallerLogo from './images/haller.png';
import BmwImage from './images/BM.jpg';
import BmwLogo from './client-logos-slice/images/bmw.png';
import BbcLogo from './client-logos-slice/images/bbc.png';
import SkyLogo from './client-logos-slice/images/sky.png';

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
          <div className={styles.grid}>
            <div className={styles.gridRow}>
              <CaseStudyCell
                clientName={'Haller'}
                clientLogo={HallerLogo}
                image={HallerImage}
                headerText={'Developing technology for good'}
                descriptionText={'Red Badger teamed up with the Haller Foundation on a pro-bono basis to develop a mobile application which helps Kenyan farmers.'}
                linkUrl={'/our-work/case-study/haller/'}
              />
              <CaseStudyCell
                clientName={'BMW'}
                clientLogo={BmwLogo}
                image={BmwImage}
                headerText={'The shortcut between you and the museum'}
                descriptionText={'Pushing the boundaries of HTML5 technology to deliver a multi-platform 3D tour of the BMW Museum.'}
                linkUrl={'/our-work/case-study/bmw/'}
              />
            </div>
            <div className={styles.gridRow}>
              <CaseStudyCell
                clientName={'BBC'}
                clientLogo={BbcLogo}
                headerText={'Delivering a better customer experience, faster'}
                descriptionText={'How the rapid prototyping model helped the BBC to uncover new ways to engage its audience.'}
                linkUrl={'/our-work/case-study/bbc-now/'}
              />
              <CaseStudyCell
                clientName={'Sky'}
                clientLogo={SkyLogo}
                headerText={'Helping customers help themselves'}
                descriptionText={'Enabling Sky to deliver continual improvement across customer services'}
                linkUrl={'/our-work/case-study/sky/'}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
