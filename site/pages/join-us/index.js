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
import JobsGallerySlide from './jobs-gallery-slice';

import metaImage from './meta-image.jpg';

import benefitsCategories from './benefits';

type Job = {
  title: string,
  description: string,
  department: string,
  slug?: string,
};

type Props = {
  jobs: Array<Job>,
  benefitsCategories: Array<BenefitsCatergoryProps>,
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
    <JobsGallerySlide />
    <Container>
      <Jobs jobs={jobs} />
    </Container>
    <Benefits benefitsCategories={benefitsCategories} />
    <BadgerTestimonialsSlice />
    <div className={styles.videoContainer}>
      <div className={styles.video}>
        <Video title="Red Badger selfie video" id="dqJuBdCf-rA" type="youtube" />
      </div>
    </div>
    <AwardsSlice />
  </div>
);

export default JoinUs;
