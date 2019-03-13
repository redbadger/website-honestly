// @flow

import React from 'react';
import styles from './style.css';

import TechSlice from '../../slices/tech-slice';
import BlogSlice from './blog-slice';
import WebinarSignupSlice from './webinar-signup-slice';
import { TechChecklist } from '../../slices/checklist-contact-us-slice';

import { YellowSlice } from '../../components/slice';
import Social from '../../components/social';
import ScrollTracker from '../../components/scroll-tracker';

import TechLabSlice from '../../slices/techlab-slice';

import metaImage from './meta-image.jpg';

type Props = {
  triedAndTestedBlogPosts: Array<Object>,
  growingTrendsBlogPosts: Array<Object>,
};

const social = {
  title: 'Technology | Red Badger',
  description:
    'We choose the right tech for the job, have meticulous engineering practices and enable continuous delivery.',
  metaImage,
  altText: 'The sentence "We choose the right tech for the job".',
  url: 'https://red-badger.com/technology',
};

const TechnologyPage = ({ triedAndTestedBlogPosts, growingTrendsBlogPosts }: Props) => (
  <ScrollTracker>
    <Social {...social} />
    <TechSlice isHeading />
    <YellowSlice>
      <TechLabSlice linkUrl="https://hubs.ly/H0gFmpQ0" />
    </YellowSlice>
    <section className={styles.pastAndFuture}>
      <div className={styles.leftBlogs}>
        <BlogSlice blogPosts={triedAndTestedBlogPosts} title="Tried and tested" />
      </div>
      <div className={styles.rightBlogs}>
        <BlogSlice blogPosts={growingTrendsBlogPosts} title="Growing trends" altStyle />
      </div>
    </section>
    <WebinarSignupSlice />
    <TechChecklist />
  </ScrollTracker>
);

export default TechnologyPage;
