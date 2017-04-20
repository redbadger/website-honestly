// @flow
import React from 'react';

import TimelineSlice from './timeline-slice';
import PrinciplesSlice from './principles-slice';
import SocialSlice from './social-slice';
import AwardsSlice from './awards-slice';
import QAndASlice from './q-and-a-slice';
import ContactUs from '../../slices/contact-us-slice';
import type { Tweet, InstagramPost } from '../../types/';
import type { CategoryProps } from './q-and-a-slice/category';

type AboutUsProps = {
  contactUsURL: string;
  tweets: Array<Tweet>;
  instagramPosts: Array<InstagramPost>;
  qAndAs: Array<CategoryProps>;
};

const AboutUs = ({ contactUsURL, tweets, instagramPosts, qAndAs }: AboutUsProps) => {
  return (
    <div>
      <PrinciplesSlice />
      <TimelineSlice />
      <ContactUs postURL={contactUsURL} yellow />
      <QAndASlice qAndAs={qAndAs} />
      <SocialSlice tweets={tweets} instagramPosts={instagramPosts} />
      <AwardsSlice />
    </div>
  );
};


export default AboutUs;
