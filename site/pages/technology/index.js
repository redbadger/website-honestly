// @flow

import React from 'react';
import styles from './style.css';

import BlogSlice from './blog-slice';
import WebinarSignupSlice from './webinar-signup-slice';
import { TechChecklist } from '../../slices/checklist-contact-us-slice';

import { LightGreySlice, GreenSlice } from '../../components/slice';
import { XLargeHeading, MediumHeading } from '../../components/headings';
import { HubspotButton } from '../../components/buttons';
import { XSmallText } from '../../components/text';
import Image from '../../components/image';

import roundTableImage from './images/2018-april-roundtable.png';
import roundTableImage2x from './images/2018-april-roundtable@2x.png';
import roundTableImage3x from './images/2018-april-roundtable@3x.png';

export type TechPageProps = {
  triedAndTestedBlogPosts: Array<Object>,
  growingTrendsBlogPosts: Array<Object>,
};

export default ({ triedAndTestedBlogPosts, growingTrendsBlogPosts }: TechPageProps) => (
  <div>
    <LightGreySlice>
      <div className={styles.headingContainer}>
        <XLargeHeading>We love tech but we only choose what‘s right for the job.</XLargeHeading>
      </div>
    </LightGreySlice>
    <GreenSlice>
      <div className={styles.leftContainer}>
        <div className={styles.roundTableImageContainer}>
          <Image src={roundTableImage} src2x={roundTableImage2x} src3x={roundTableImage3x} />
        </div>
      </div>
      <div className={styles.rightContainer}>
        <MediumHeading>April 2018 Report</MediumHeading>
        <XSmallText>
          Technology doesn’t stand still and neither do we. Our team gets together on a regular
          basis to discuss which technologies we’re using to solve difficult problems on our
          projects, and which technologies are on our radar as ones to watch.
        </XSmallText>
        <HubspotButton
          cta="Read PDF Report"
          analyticsTitle="RoundtablePDFLink"
          analyticsCategory="TechnologyPage"
          hubspotTitle="roundtable"
        />
      </div>
    </GreenSlice>
    <section className={styles.pastAndFuture}>
      <div className={styles.leftBlogs}>
        <BlogSlice blogPosts={triedAndTestedBlogPosts} title={'Tried and tested'} />
      </div>
      <div className={styles.rightBlogs}>
        <BlogSlice blogPosts={growingTrendsBlogPosts} title={'Growing trends'} altStyle />
      </div>
    </section>
    <WebinarSignupSlice />
    <TechChecklist />
  </div>
);
