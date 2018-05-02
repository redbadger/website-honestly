// @flow

import React, { Fragment } from 'react';
import styles from './style.css';

import BlogSlice from './blog-slice';
import WebinarSignupSlice from './webinar-signup-slice';
import { TechChecklist } from '../../slices/checklist-contact-us-slice';

import { WhiteSlice, GreenSlice } from '../../components/slice';
import { H1, H2 } from '../../components/headings';
import { RoundtableHubspotButton } from '../../components/buttons';
import { XSmallText } from '../../components/text';
import Image from '../../components/image';

import roundTableImage from './images/2018-april-roundtable.png';
import roundTableImage2x from './images/2018-april-roundtable@2x.png';
import roundTableImage3x from './images/2018-april-roundtable@3x.png';

type Props = {
  triedAndTestedBlogPosts: Array<Object>,
  growingTrendsBlogPosts: Array<Object>,
};

const TechnologyPage = ({ triedAndTestedBlogPosts, growingTrendsBlogPosts }: Props) => (
  <Fragment>
    <WhiteSlice>
      <div className={styles.heading}>
        <H1>We love tech but we only choose what‘s right for the job.</H1>
      </div>
    </WhiteSlice>
    <GreenSlice>
      <div className={styles.left}>
        <Image src={roundTableImage} src2x={roundTableImage2x} src3x={roundTableImage3x} />
      </div>
      <div className={styles.right}>
        <div className={styles.roundtableHeading}>
          <H2 type="fontM2">April 2018 Report</H2>
        </div>
        <div className={styles.description}>
          <XSmallText>
            Technology doesn’t stand still and neither do we. Find out which new and fully adopted
            technologies our team think are adding value.
          </XSmallText>
        </div>
        <div className={styles.hubspotButtonWrapper}>
          <RoundtableHubspotButton
            analyticsTitle="RoundtablePDFLink"
            analyticsCategory="TechnologyPage"
            hubspotTitle="roundtableApril2018"
            className={styles.readPdfReportWrapper}
          />
        </div>
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
  </Fragment>
);

export default TechnologyPage;
