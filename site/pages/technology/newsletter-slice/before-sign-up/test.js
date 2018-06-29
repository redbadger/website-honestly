/* eslint-disable camelcase */
import React from 'react';
import { shallow } from 'enzyme';
import BeforeSignUp from '.';

import groups from '../../../../../services/mailchimp/config';

describe('BeforeSignUp', () => {
  it('sets the initial state correctly', () => {
    const wrapper = shallow(<BeforeSignUp />);
    expect(wrapper.state()).toEqual({
      email_address: '',
      submitting: false,
      interests: {
        [groups.techPageSignup]: true,
      },
    });
  });

  it('handles handleInputChange and sets the state correctly', () => {
    const wrapper = shallow(<BeforeSignUp />);
    const event = {
      target: {
        name: 'exampleName',
        value: 'exampleValue',
      },
    };
    wrapper.instance().handleInputChange(event);
    expect(wrapper.state()).toEqual({
      email_address: '',
      submitting: false,
      exampleName: 'exampleValue',
      interests: {
        [groups.techPageSignup]: true,
      },
    });
  });

  it('handles componentWillReceiveProps and sets the state correctly', () => {
    const wrapper = shallow(<BeforeSignUp />);
    wrapper.instance().componentWillReceiveProps();
    expect(wrapper.state()).toEqual({
      email_address: '',
      submitting: false,
      interests: {
        [groups.techPageSignup]: true,
      },
    });
  });

  it('handles handleSubmit and sets the state correctly', () => {
    const submitFormFunction = () =>
      new Promise(resolve => {
        resolve({
          json: () => {
            return {
              newsletterSubmitted: true,
              email_address: 'jkdjksdhedw239e8h238u',
              errorMessage: 'Example error message',
              updatedFormSubmitted: false,
            };
          },
        });
      });
    const wrapper = shallow(<BeforeSignUp onSubmit={submitFormFunction} />);
    wrapper.instance().handleSubmit();
    expect(wrapper.state()).toEqual({
      email_address: '',
      submitting: true,
      interests: {
        [groups.techPageSignup]: true,
      },
    });
  });
});
