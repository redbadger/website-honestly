import React from 'react';
import { shallow } from 'enzyme';
import NewsletterSlice from '.';
import AfterSignUp from './after-sign-up';
import BeforeSignUp from './before-sign-up';

describe('Newsletter slice', () => {
  it('shows pre-signup content if the form has not been submitted yet - default state', () => {
    const wrapper = shallow(<NewsletterSlice>Hello</NewsletterSlice>);
    expect(wrapper.find(BeforeSignUp)).to.have.length(1);
  });

  it('changes "submitted" state when submitted', () => {
    const wrapper = shallow(<NewsletterSlice>Hello</NewsletterSlice>);
    wrapper.instance().onSubmit({
      preventDefault: () => {},
    });
    expect(wrapper.state('submitted')).to.equal(true);
  });

  it('shows post-signup content if the form has been submitted', () => {
    const wrapper = shallow(<NewsletterSlice>Hello</NewsletterSlice>);
    wrapper.setState({
      submitted: true,
    });
    expect(wrapper.find(AfterSignUp)).to.have.length(1);
  });
});
