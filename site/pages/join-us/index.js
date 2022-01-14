// @flow
import React from 'react';

import Container from '../../components/container';
import Jobs from './jobs';
import styles from './style.css';
import Video from '../../components/video';
import HeaderContainer from './header-container';
import Social from '../../components/social';
import Benefits from './benefits-slice';
import JobsIntro from './jobs-intro-slice';
import AwardsSlice from '../../slices/awards-slice/index';
import BadgerTestimonialsSlice from './badger-testimonials-slice';
import JobsGallerySlice from './jobs-gallery-slice';
import StonewallSlice from '../../components/stonewall-slice';

import metaImage from './meta-image.jpg';

import type { CategoryProps } from './benefits-slice/category';

import type { JobProps } from './jobs';

import benefitsCategories from './benefits';

type Props = {
  jobs: Array<JobProps>,
  benefitsCategories: Array<CategoryProps>,
};

const social = {
  title: 'Join us | Red Badger',
  description:
    'We’re a Sunday Times Best Small Company to Work For 2018 and looking for the best talent to join our team.',
  metaImage,
  altText: 'An illustration an award we won.',
  url: 'https://red-badger/jobs',
};

const JoinUs = ({ jobs }: Props) => (
  <div className={styles.background}>
    <Social {...social} />
    <JobsIntro>
      <HeaderContainer />
    </JobsIntro>
    <JobsGallerySlice />
    <StonewallSlice />
    {jobs.length && (
      <Container>
        <Jobs jobs={jobs} />
      </Container>
    )}
    {benefitsCategories.length && <Benefits benefitsCategories={benefitsCategories} />}
    <BadgerTestimonialsSlice navPositionBottom />
    <div className={styles.videoContainer}>
      <div className={styles.video}>
        <Video title="Red Badger selfie video" id="dqJuBdCf-rA" type="youtube" />
      </div>
    </div>
    <AwardsSlice />
  </div>
);

export default JoinUs;
