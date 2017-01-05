import React from 'react';

import TimelineSlice from './timeline-slice';
import PrinciplesSlice from './principles-slice';
import SocialSlice from './social-slice';
import ContactUs from '../../slices/contact-us-slice';
import type { Tweet, InstagramPost } from '../../types/';

type AboutUsProps = {
  contactUsURL: string;
  tweets: Array<Tweet>;
  instagramPosts: Array<InstagramPost>;
};

const AboutUs = ({ contactUsURL, tweets, instagramPosts }: AboutUsProps) => {
  return (
    <div>
      <SocialSlice tweets={tweets} instagramPosts={instagramPosts} />
      <PrinciplesSlice />
      <TimelineSlice />
      <ContactUs postURL={contactUsURL} />
    </div>
  );
};


export default AboutUs;
