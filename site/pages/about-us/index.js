// @flow
import React from 'react';

import TimelineSlice from './timeline-slice';
import PrinciplesSlice from './principles-slice';
import SocialSlice from './social-slice';
import QAndASlice from './q-and-a-slice';
import ChecklistContactUs from '../../slices/checklist-contact-us-slice';
import type { Tweet, InstagramPost } from '../../types/';
import type { CategoryProps } from './q-and-a-slice/category';

type AboutUsProps = {
  tweets: Array<Tweet>,
  instagramPosts: Array<InstagramPost>,
  qAndAs: Array<CategoryProps>,
};

const AboutUs = ({ tweets, instagramPosts, qAndAs }: AboutUsProps) => {
  return (
    <div>
      <PrinciplesSlice />
      <TimelineSlice />
      <ChecklistContactUs />
      <QAndASlice qAndAs={qAndAs} />
      <SocialSlice tweets={tweets} instagramPosts={instagramPosts} />
    </div>
  );
};

export default AboutUs;
