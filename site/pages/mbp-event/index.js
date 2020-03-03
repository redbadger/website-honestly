// @flow
import React from 'react';
import MBPLP from '../../templates/mbp-lp';

// import Social from '../../components/social';
import joeImage from './assets/joe.jpg';
import harriImage from './assets/harri.jpg';
import chrisImage from './assets/chris.jpg';

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
    hubspotForm={{
      portalId: '1234567',
      guid: '1234567',
      name: 'mbp-form',
      cssClass: 'css',
      consentCssClass: 'css-consent',
      submitText: 'RSVP',
      inlineMessage: 'thank you',
      formFields: [
        {
          richText: '',
          name: 'first-name',
          label: 'First name',
          fieldType: 'text',
          description: 'please enter your first name',
          defaultValue: '',
          placeholder: '',
          required: true,
          enabled: true,
          hidden: false,
          labelHidden: false,
          showWarnings: true,
          valid: true,
          onChange: () => {
            console.log('hi');
          },
        },
        {
          richText: '',
          name: 'last-name',
          label: 'Last name',
          fieldType: 'text',
          description: 'please enter your last name',
          defaultValue: '',
          placeholder: '',
          required: true,
          enabled: true,
          hidden: false,
          labelHidden: false,
          showWarnings: true,
          valid: true,
          onChange: () => {
            console.log('hi');
          },
        },
        {
          richText: '',
          name: 'email-address',
          label: 'Email Address',
          fieldType: 'text',
          description: 'please enter your ekail address',
          defaultValue: '',
          placeholder: '',
          required: true,
          enabled: true,
          hidden: false,
          labelHidden: false,
          showWarnings: true,
          valid: true,
          onChange: () => {
            console.log('hi');
          },
        },
      ],
      formConsent: {
        consentMessage:
          'Once you are signed up to our marketing communications, you can unsubscribe and update your preferences at any time. We’ll share our news, blogs, and invitations to our events and webinars. View our Privacy Policy to find out more about how we take care of your personal data.',
        checkboxes: [
          {
            label: 'Yes, please sign me up.',
            required: true,
          },
        ],
      },
      pageTitle: 'this-page',
    }}
  />
);

export default MBPPage;
