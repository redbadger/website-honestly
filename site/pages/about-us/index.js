import React from 'react';

import PrinciplesSlice from './principles-slice';
import ContactUs from '../../slices/contact-us-slice';

const AboutUs = ({ contactUsURL }) => {
  return (
    <div>
      <PrinciplesSlice />
      <ContactUs postURL={contactUsURL} />
    </div>
  );
};

AboutUs.propTypes = {
  contactUsURL: React.PropTypes.string.isRequired,
};

export default AboutUs;
