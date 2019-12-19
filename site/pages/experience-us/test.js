import React from 'react';
import { shallow } from 'enzyme';
import ExperienceUsPage from '.';

describe('site/pages/experience-us', () => {
  const goldCoinPages = [
    {
      slug: 'test',
      title: 'test-title',
      subTitle: 'test-subtitle',
      headerImage: 'https://www.example.com/test.jpg',
      headerAlt: 'test-alt',
      duration: 'test-duration',
      price: 'test-price',
      type: 'lunch',
      location: 'test-location',
      whatIsIt: '<p>test what is it</p>',
      whoIsItFor: '<p>test who is it for</p>',
      whatWillYouLearn: '<p>test what will you learn</p>',
      whoWillRun: '<p>test who will run</p>',
      consultants: [
        {
          image: 'https://www.example.com/test-3.jpg',
          name: 'test-consultant',
          role: 'test-role',
          profileUrl: 'https://www.example.com/test-consultant',
        },
      ],
      previews: [
        {
          image: 'https://www.example.com/test-2.jpg',
          title: 'test-title-2',
          subTitle: 'test-subtitle-2',
          url: 'https://www.example.com/',
          duration: 'test-duration-2',
          alt: 'test-alt-2',
        },
      ],
      hubspotForm: {
        portalId: 1111111,
        guid: 'test-guid',
        name: 'test-name',
        cssClass: 'test-css',
        submitText: 'test-submit',
        inlineMessage: 'test-inline',
        formFields: [
          {
            name: 'test-field-name',
            label: 'test-label',
            fieldType: 'lunch',
            required: true,
            enabled: true,
            hidden: false,
            labelHidden: false,
          },
        ],
      },
    },
  ];

  it('Renders', () => {
    const shallowRender = props => shallow(<ExperienceUsPage {...props} />);
    const component = shallowRender({ goldCoinPages });
    expect(component).toMatchSnapshot();
  });
});
