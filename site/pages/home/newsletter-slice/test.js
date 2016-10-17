import React from 'react';
import { shallow } from 'enzyme';
import NewsLetter from '.';
import AfterSignUp from './after-sign-up';
import BeforeSignUp from './before-sign-up';

describe('Newsletter slice', () => {
  it('shows pre-signup content if the form has not been submitted yet - default state', () => {
    const wrapper = shallow(<NewsLetter />);
    expect(wrapper.find(BeforeSignUp)).to.have.length(1);
  });

  it('changes "submitted" state when submitted', () => {
    const wrapper = shallow(<NewsLetter />);
    wrapper.instance().onSubmit({
      preventDefault: () => {},
    });
    expect(wrapper.state('newsletterSubmitted')).to.equal(true);
  });

  it('shows post-signup content if the form has been submitted', () => {
    const wrapper = shallow(<NewsLetter />);
    wrapper.setState({
      newsletterSubmitted: true,
    });
    expect(wrapper.find(AfterSignUp)).to.have.length(1);
  });
});
