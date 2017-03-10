/* eslint-disable camelcase */
import React from 'react';
import { shallow } from 'enzyme';
import BeforeSignUp from '.';

describe('BeforeSignUp', () => {
  it('sets the initial state correctly', () => {
    const wrapper = shallow(<BeforeSignUp />);
    expect(wrapper.state()).to.deep.equal({
      email_address: '',
      submitting: false,
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
    expect(wrapper.state()).to.deep.equal({
      email_address: '',
      submitting: false,
      exampleName: 'exampleValue',
    });
  });

  it('handles componentWillReceiveProps and sets the state correctly', () => {
    const wrapper = shallow(<BeforeSignUp />);
    wrapper.instance().componentWillReceiveProps();
    expect(wrapper.state()).to.deep.equal({
      email_address: '',
      submitting: false,
    });
  });

  it('handles handleSubmit and sets the state correctly', () => {
    const submitFormFunction = () => new Promise(resolve => {
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
    expect(wrapper.state()).to.deep.equal({
      email_address: '',
      submitting: true,
    });
  });
});
