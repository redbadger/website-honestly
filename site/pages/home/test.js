import React from 'react';
import { shallow } from 'enzyme';
import Home from '.';
import AfterSignUp from './newsletter-slice/after-sign-up';
import BeforeSignUp from './newsletter-slice/before-sign-up';

describe('Newsletter slice', () => {
  it('shows pre-signup content if the form has not been submitted yet - default state', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.find(BeforeSignUp)).to.have.length(1);
  });

  it('changes "submitted" state when submitted', () => {
    const wrapper = shallow(<Home />);
    wrapper.instance().onSubmit({
      preventDefault: () => {},
    });
    expect(wrapper.state('newsletterSubmitted')).to.equal(true);
  });

  it('shows post-signup content if the form has been submitted', () => {
    const wrapper = shallow(<Home />);
    wrapper.setState({
      newsletterSubmitted: true,
    });
    expect(wrapper.find(AfterSignUp)).to.have.length(1);
  });
});
