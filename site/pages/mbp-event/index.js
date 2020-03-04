// @flow
import React from 'react';
import MBPLP from '../../templates/mbp-lp';

// import Social from '../../components/social';
import joeImage from './assets/joe.jpg';
import harriImage from './assets/harri.jpg';
import chrisImage from './assets/chris.jpg';

import type { HubspotFormProps } from '../../components/hubspot/form';

// const social = {
//   title: 'Experience Red Badger',
//   description:
//     'Meet our tech and design experts to find out how we can deliver value, build capability, and change your culture to increase business efficiency.',
//   altText: 'An illustration an award we won.',
//   url: 'https://red-badger.com/what-we-do/experience-us/',
//   metaImage,
// };

const MBPPage = ({ hubspotForm }: HubspotFormProps) => (
  <MBPLP
    title="Mission Beyond"
    slug="mission-beyond"
    time="6:30pm - 9pm"
    date="Tuesday 6 May"
    location="The Conduit"
    consultants={[
      {
        image: chrisImage,
        name: 'Elizabeth Moss Kanter',
        role: 'UCL Institute of Management Studies',
        profileUrl: 'this-person',
      },
      {
        image: harriImage,
        name: 'Harri Adams',
        role: 'Managing Director Cell C, Red Badger',
        profileUrl: 'this-person',
      },
      {
        image: joeImage,
        name: 'Joe Paice',
        role: 'Managing Director Cell C, Red Badger',
        profileUrl: 'this-person',
      },
    ]}
    formId={'1234567'}
    hubspotForm={hubspotForm}
  />
);

export default MBPPage;
