import React from 'react';
import { mount } from 'enzyme';
import AfterSignUp from '.';

describe('AfterSignUp', () => {
  it('sets the initial state correctly', () => {
    const wrapper = mount(<AfterSignUp />);
    expect(wrapper.state()).toEqual({
      name: '',
      company: '',
      role: '',
      submitting: false,
    });
  });

  it('handles handleInputChange and sets the state correctly', () => {
    const wrapper = mount(<AfterSignUp />);
    const event = {
      target: {
        name: 'exampleName',
        value: 'exampleValue',
      },
    };
    wrapper.instance().handleInputChange(event);
    expect(wrapper.state()).toEqual({
      submitting: false,
      exampleName: 'exampleValue',
      name: '',
      company: '',
      role: '',
    });
  });

  it('handles handleSubmit and sets the state correctly', () => {
    const submitFormFunction = () =>
      new Promise(resolve => {
        resolve({
          json: () => {
            return {
              newsletterSubmitted: true,
              email_address: 'jkdjksdhedw239e8h238u', // eslint-disable-line camelcase
              errorMessage: 'Example error message',
              updatedFormSubmitted: false,
            };
          },
        });
      });
    const wrapper = mount(<AfterSignUp onSubmit={submitFormFunction} />);
    wrapper.instance().handleSubmit();
    expect(wrapper.state()).toEqual({
      submitting: true,
      name: '',
      company: '',
      role: '',
    });
  });
});
