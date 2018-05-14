/* eslint-disable camelcase */
import React from 'react';
import nock from 'nock';
import { shallow } from 'enzyme';
import NewsLetter from '.';
import AfterSignUp from './after-sign-up';
import BeforeSignUp from './before-sign-up';

describe('Newsletter slice', () => {
  it('sets the initial state correctly', () => {
    const wrapper = shallow(<NewsLetter />);
    expect(wrapper.state()).to.deep.equal({
      newsletterSubmitted: false,
      email: '',
      errorMessage: '',
      updatedFormSubmitted: false,
    });
  });

  it('shows pre-signup content if the form has not been submitted yet - default state', () => {
    const wrapper = shallow(<NewsLetter />);
    expect(wrapper.find(BeforeSignUp)).to.have.length(1);
  });

  it('shows post-signup content if the form has been submitted', () => {
    const wrapper = shallow(<NewsLetter />);
    wrapper.setState({
      newsletterSubmitted: true,
    });
    expect(wrapper.find(AfterSignUp)).to.have.length(1);
  });

  it('handles the error correctly when the user does not provide a full name in the second form', () => {
    const wrapper = shallow(<NewsLetter />);
    const expectedUrl = 'https://example.com/';
    nock(expectedUrl)
      .post(/.*/, {})
      .reply(200, '"Hello World"');
    wrapper.setState({ email: 'test@gmail.com' });
    const data = { name: '' };
    wrapper.instance().updateUser(data);
    expect(wrapper.state()).to.deep.equal({
      email: 'test@gmail.com',
      errorMessage: 'Please tell us your name',
      updatedFormSubmitted: false,
      newsletterSubmitted: false,
    });
  });

  it('sends the correct data to the api', done => {
    const wrapper = shallow(<NewsLetter />);
    const expectedUrl = 'https://example.com/';

    nock(expectedUrl)
      .patch(/.*/, {
        email: 'test@gmail.com',
        name: 'Bob',
        hutk: '',
        pageUrl: 'about:blank',
        pageName: '',
      })
      .reply(200, '"Hello World"');

    wrapper.setState({ email: 'test@gmail.com' });
    wrapper
      .instance()
      .updateUser({ name: 'Bob' })
      .then(() => {
        expect(wrapper.state()).to.deep.equal({
          newsletterSubmitted: false,
          email: 'test@gmail.com',
          errorMessage: '',
          updatedFormSubmitted: true,
        });
        done();
      })
      .catch(err => {
        done(err);
      });
  });
});
