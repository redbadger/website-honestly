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
      <PrinciplesSlice />
      <TimelineSlice />
      <ContactUs postURL={contactUsURL} />
      <SocialSlice tweets={tweets} instagramPosts={instagramPosts} />
    </div>
  );
};


export default AboutUs;
