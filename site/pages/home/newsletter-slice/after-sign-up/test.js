import React from 'react';
import { shallow } from 'enzyme';
import AfterSignUp from '.';

describe('AfterSignUp', () => {
  it('sets the initial state correctly', () => {
    const wrapper = shallow(<AfterSignUp />);
    expect(wrapper.state()).to.deep.equal({
      name: '',
      company: '',
      role: '',
      submitting: false,
    });
  });

  it('handles handleInputChange and sets the state correctly', () => {
    const wrapper = shallow(<AfterSignUp />);
    const event = {
      target: {
        name: 'exampleName',
        value: 'exampleValue',
      },
    };
    wrapper.instance().handleInputChange(event);
    expect(wrapper.state()).to.deep.equal({
      submitting: false,
      exampleName: 'exampleValue',
      name: '',
      company: '',
      role: '',
    });
  });

  it('handles componentWillReceiveProps and sets the state correctly', () => {
    const wrapper = shallow(<AfterSignUp />);
    wrapper.instance().componentWillReceiveProps();
    expect(wrapper.state()).to.deep.equal({
      name: '',
      company: '',
      role: '',
      submitting: false,
    });
  });

  it('handles handleSubmit and sets the state correctly', () => {
    const submitFormFunction = () => new Promise(resolve => {
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
    const wrapper = shallow(<AfterSignUp onSubmit={submitFormFunction} />);
    wrapper.instance().handleSubmit();
    expect(wrapper.state()).to.deep.equal({
      submitting: true,
      name: '',
      company: '',
      role: '',
    });
  });
});
