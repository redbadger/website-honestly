/* eslint-disable jsx-a11y/no-static-element-interactions */

import React from 'react';
import ReactGA from 'react-ga';
import InlineSVG from 'svg-inline-react';
import styles from './style.css';

import BlogSlice from './blog-slice';
import NewsletterSlice from './newsletter-slice';

import techRoundTableImage from './images/techroundtable.png';
import slackSVG from './images/slack.svg';
import meetupSVG from './images/react-meetup.svg';

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

export default ({ triedAndTestedBlogPosts, growingTrendsBlogPosts }: TechPageProps) =>
  <div>
    <div className={styles.introContainer}>
      <section className={styles.intro}>
        <section className={styles.leftContent}>
          <div className={styles.innerContainer}>
            <h1 className={styles.mainHeader}>Technology</h1>
            <p className={styles.description}>
              Technology doesn’t stand still and neither do we. Our team gets together on
              a regular basis to discuss which technologies we’re using to solve difficult
              problems on our projects, and which technologies are on our radar as ones to watch.
            </p>
            <div className={styles.latestRoundTableLinkContainer}>
              <a
                className={styles.latestRoundTableLink}
                href="http://roundtable.red-badger.com/Red_Badger_Tech_Round_Table_June_2017.pdf"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span onClick={trackAnalytics('RoundtablePDFLink')}>
                  Read PDF report
                </span>
              </a>
            </div>
          </div>
        </section>
        <section className={styles.rightContent}>
          <div className={styles.innerContainer}>
            <a
              href="http://roundtable.red-badger.com/Red_Badger_Tech_Round_Table_June_2017.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className={styles.techRoundTable}
                src={techRoundTableImage}
                alt="tech roundtable"
                onClick={trackAnalytics('RoundtablePDFLinkImage')}
              />
            </a>
          </div>
        </section>
      </section>
    </div>
    <NewsletterSlice />
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
        <a
          className={styles.webinarButton}
          href="https://redbadger.typeform.com/to/cBuJUl"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InlineSVG src={slackSVG} className={styles.socialIcon} />
          Join us on Slack
        </a>
        <a
          className={styles.webinarButton}
          href="https://meetup.react.london/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InlineSVG src={meetupSVG} className={styles.socialIcon} />
          Come to our Meetup
        </a>
      </div>
    </section>
  </div>;
