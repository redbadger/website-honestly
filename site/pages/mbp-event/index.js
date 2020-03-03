// @flow
import React, { Component } from 'react';
import MBPLP from '../../templates/mbp-lp';

import Social from '../../components/social';

// const social = {
//   title: 'Experience Red Badger',
//   description:
//     'Meet our tech and design experts to find out how we can deliver value, build capability, and change your culture to increase business efficiency.',
//   altText: 'An illustration an award we won.',
//   url: 'https://red-badger.com/what-we-do/experience-us/',
//   metaImage,
// };

const MBPPage = () => (
  <MBPLP
    title="Mission Beyond"
    slug="mission-beyond"
    time="6:30pm - 9pm"
    date="Tuesday 6 May"
    location="The Conduit"
    consultants={[
      {
        image: 'image.jpg',
        name: 'this person',
        role: 'stuff',
        profileUrl: 'this-person',
      },
      {
        image: 'image.jpg',
        name: 'this person',
        role: 'stuff',
        profileUrl: 'this-person',
      },
      {
        image: 'image.jpg',
        name: 'this person',
        role: 'stuff',
        profileUrl: 'this-person',
      },
    ]}
    formId={1234567}
    hubspotForm={{
      portalId: 1234567,
      guid: 1234567,
      name: 'mbp-form',
      cssClass: 'css',
      consentCssClass: 'css-consent',
      submitText: 'thanks',
      inlineMessage: 'thank you',
      formFields: [
        {
          richText: 'hello there',
          name: 'form bit',
          label: 'form-bit',
          fieldType: 'checkbox',
          description: 'this is a checkbox',
          defaultValue: 'yes',
          placeholder: 'no',
          required: true,
          enabled: true,
          hidden: true,
          labelHidden: true,
          showWarnings: true,
          valid: true,
          onChange: () => {
            console.log('hi');
          },
        },
      ],
      formConsent: {
        consentMessage: 'I consent',
        checkboxes: [
          {
            label: 'checkbox',
            required: true,
          },
        ],
      },
      pageTitle: 'this-page',
    }}
  />
);

export default MBPPage;
