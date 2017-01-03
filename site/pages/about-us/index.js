import React from 'react';

import TimelineSlice from './timeline-slice';
import PrinciplesSlice from './principles-slice';
import SocialSlice from './social-slice';
import ContactUs from '../../slices/contact-us-slice';

type Tweet = Object;

type AboutUsProps = {
  tweets: Array<Tweet>
};

const AboutUs = ({ contactUsURL, tweets }: AboutUsProps) => {
  return (
    <div>
      <SocialSlice tweets={tweets} />
      <PrinciplesSlice />
      <TimelineSlice />
      <ContactUs postURL={contactUsURL} />
    </div>
  );
};

AboutUs.propTypes = {
  contactUsURL: React.PropTypes.string.isRequired,
};

export default AboutUs;
