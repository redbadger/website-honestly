// @flow
import React from 'react';
import MBPLP from '../../templates/mbp-lp';

// import Social from '../../components/social';
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

const MBPPage = ({ hubspotForm }: { hubspotForm: HubspotFormProps }) => (
  <MBPLP
    title="Mission Beyond"
    slug="mission-beyond"
    time="8:30am - 10:30am"
    date="Wednesday,  May 6, 2020 "
    place="The Conduit"
    location="40 Conduit St, W1S 2YQ"
    consultants={[
      {
        image: chrisImage,
        name: 'Matthew Syed',
        description:
          'Matthew is a broadcaster and bestselling author. His latest book, Rebel Ideas, is a fascinating journey through the science of team performance, drawing on psychology, economics, anthropology and genetics, with lessons from a dazzling range of case studies. It will strengthen any company, institution, team, or individual, sharing the remarkable benefits of personalised nutrition, advice on how to break free of the echo chambers that surround us, and tips on how we can all develop an ‘outsider mindset’.',
        profileUrl: 'this-person',
      },
      {
        image: harriImage,
        name: 'Cain Ullah',
        description:
          'Cain is CEO and co-founder of Red Badger, an independent digital product and innovation consultancy. Mission Beyond Product is born out of the belief the huge challenges the world faces today – from climate change to our ageing population – can be solved with a collaborative, mission-based approach. It’s a cross-sector coalition to turn ideas into action.',
        profileUrl: 'this-person',
      },
    ]}
    formId={hubspotForm.guid}
    hubspotForm={hubspotForm}
  />
);

export default MBPPage;
