/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/no-danger */
// @flow

import React from 'react';
import ReactGA from 'react-ga';
import styles from './style.css';

import BlogSlice from './blog-slice';
import WebinarSignupSlice from './webinar-signup-slice';
import HubspotButtons from './hubspot-buttons';

import techRoundTableImage from './images/techroundtable.png';

export type TechPageProps = {
  triedAndTestedBlogPosts: Array<Object>,
  growingTrendsBlogPosts: Array<Object>,
};

const trackAnalytics = title => () =>
  ReactGA.event({
    category: 'TechnologyPage',
    action: title,
    label: `From: ${window.location.pathname}`,
  });

export default ({ triedAndTestedBlogPosts, growingTrendsBlogPosts }: TechPageProps) => (
  <div>
    <div className={styles.introContainer}>
      <section className={styles.intro}>
        <section className={styles.leftContent}>
          <div className={styles.innerContainer}>
            <h1 className={styles.mainHeader}>Technology</h1>
            <p className={styles.description}>
              Technology doesn’t stand still and neither do we. Our team gets together on a regular
              basis to discuss which technologies we’re using to solve difficult problems on our
              projects, and which technologies are on our radar as ones to watch.
            </p>
            <div
              className={styles.latestRoundTableLinkContainer}
              onClick={trackAnalytics('RoundtablePDFLink')}
            >
              <div
                className={`${styles.hubspotBtn} ${styles.readPdfReportWrapper}`}
                dangerouslySetInnerHTML={HubspotButtons.roundtable}
              />
            </div>
          </div>
        </section>
        <section className={styles.rightContent}>
          <div className={styles.innerContainer}>
            <img
              className={styles.techRoundTable}
              src={techRoundTableImage}
              alt="tech roundtable"
            />
          </div>
        </section>
      </section>
    </div>
    <WebinarSignupSlice />
    <section className={styles.pastAndFuture}>
      <div className={styles.leftBlogs}>
        <BlogSlice blogPosts={triedAndTestedBlogPosts} title={'Tried and tested'} />
      </div>
      <div className={styles.rightBlogs}>
        <BlogSlice blogPosts={growingTrendsBlogPosts} title={'Growing trends'} altStyle />
      </div>
    </section>
    <section className={styles.social}>
      <div className={styles.webinarInner}>
        <h2 className={styles.webinarText}>{'Say hello:'}</h2>
        <div className={`${styles.hubspotBtn} ${styles.slackBtnWrapper}`} dangerouslySetInnerHTML={HubspotButtons.slack} />
        <div className={`${styles.hubspotBtn} ${styles.meetupBtnWrapper}`} dangerouslySetInnerHTML={HubspotButtons.meetup} />
      </div>
    </section>
  </div>
);
