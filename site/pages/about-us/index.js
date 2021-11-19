// @flow
import React from 'react';

import TimelineSlice from './timeline-slice';
import PrinciplesSlice from './principles-slice';
import SocialSlice from './social-slice';
import QAndASlice from './q-and-a-slice';
import ChecklistContactUs from '../../slices/checklist-contact-us-slice';
import Social from '../../components/social';

import metaImage from './meta-image.jpg';

import type { Tweet } from '../../types';
import type { CategoryProps } from './q-and-a-slice/category';

type AboutUsProps = {
  tweets: Array<Tweet>,
  qAndAs: Array<CategoryProps>,
};

const social = {
  title: 'About Us | Red Badger',
  description:
    'We’re an award winning, independently owned consultancy who believe in doing the right thing and doing the thing right.',
  metaImage,
  altText: 'Our founders Dave, Stu and Cain.',
  url: 'https://red-badger.com/about-us',
};

const AboutUs = ({ tweets, qAndAs }: AboutUsProps) => {
  return (
    <div>
      <Social {...social} />
      <PrinciplesSlice />
      <TimelineSlice />
      <ChecklistContactUs />
      {qAndAs.length && <QAndASlice qAndAs={qAndAs} />}
      <SocialSlice tweets={tweets} />
    </div>
  );
};

export default AboutUs;
