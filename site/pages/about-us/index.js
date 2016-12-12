import React from 'react';

import PrinciplesSlice from './principles-slice';
import ContactUs from '../../slices/contact-us-slice';

export default function AboutUs({ contactUsURL }) {
  return (
    <div>
      <PrinciplesSlice />
      <ContactUs postURL={contactUsURL} />
    </div>
  );
}
