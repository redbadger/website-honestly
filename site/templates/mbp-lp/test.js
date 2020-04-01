import React from 'react';
import { render, shallow } from 'enzyme';
import MBPLP from '.';

describe('site/templates/gold-coin-lp', () => {
  const testMBPPage = {
    slug: 'test',
    title: 'test-title',
    time: 'string',
    date: 'string',
    place: 'string',
    location: 'string',
    consultants: [
      {
        image: 'https://www.example.com/test-3.jpg',
        name: 'test-consultant',
        role: 'test-role',
        profileUrl: 'https://www.example.com/test-consultant',
      },
    ],
    formId: 'abc123',
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
  };

  it('Renders', () => {
    const shallowRender = props => shallow(<MBPLP {...props} />);
    const component = shallowRender({ ...testMBPPage });
    expect(component).toMatchSnapshot();
  });

  it('should render consultants', () => {
    const mbpPage = render(<MBPLP {...testMBPPage} />);

    const consultantList = mbpPage.find('.contentSpeakers').last();
    expect(consultantList.length).toEqual(1);
    expect(consultantList.text()).toMatch(/test-consultant/);
  });
});
