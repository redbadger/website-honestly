/* eslint-disable camelcase */
import React from 'react';
import { shallow } from 'enzyme';
import NewsLetter from '.';
import AfterSignUp from './after-sign-up';
import BeforeSignUp from './before-sign-up';

describe('Newsletter slice', () => {
  it('sets the initial state correctly', () => {
    const wrapper = shallow(<NewsLetter />);
    expect(wrapper.state()).toEqual({
      newsletterSubmitted: false,
      email_address: '',
      errorMessage: '',
      updatedFormSubmitted: false,
    });
  });

  it('shows pre-signup content if the form has not been submitted yet - default state', () => {
    const wrapper = shallow(<NewsLetter />);
    expect(wrapper.find(BeforeSignUp).length).toEqual(1);
  });

  it('shows post-signup content if the form has been submitted', () => {
    const wrapper = shallow(<NewsLetter />);
    wrapper.setState({
      newsletterSubmitted: true,
    });
    expect(wrapper.find(AfterSignUp).length).toEqual(1);
  });
  it('handles the error correctly when the user does not provide a full name in the second form', () => {
    const wrapper = shallow(<NewsLetter />);
    wrapper.setState({
      email_address: 'test@gmail.com',
    });
    const data = {
      name: '',
    };
    wrapper.instance().updateUser(data);
    expect(wrapper.state()).toEqual({
      newsletterSubmitted: true,
      email_address: 'test@gmail.com',
      errorMessage: 'Please tell us your name',
      updatedFormSubmitted: false,
    });
  });

  it('sets the state to the api response', done => {
    const submitFormFunction = () =>
      new Promise(resolve => {
        resolve({
          json: () => {
            return {
              newsletterSubmitted: false,
              email_address: 'jkdjksdhedw239e8h238u@gmail.com',
              errorMessage: 'Example error message',
              updatedFormSubmitted: false,
            };
          },
        });
      });

    const wrapper = shallow(<NewsLetter />);
    const promise = wrapper
      .instance()
      .submitForm({ email_address: 'jkdjksdhedw239e8h238u@gmail.com' }, 'POST', submitFormFunction);
    promise
      .then(() => {
        expect(wrapper.state()).toEqual({
          newsletterSubmitted: false,
          email_address: 'jkdjksdhedw239e8h238u@gmail.com',
          errorMessage: 'Example error message',
          updatedFormSubmitted: false,
        });
        done();
      })
      .catch(err => {
        done(err);
      });
  });
});
