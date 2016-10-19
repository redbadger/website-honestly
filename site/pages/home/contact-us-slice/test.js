import React from 'react';
import { shallow } from 'enzyme';
import ContactUs from '.';
import Form from './form/';
import Success from './success/';

describe('Contact Us Slice', () => {
  it('shows pre-signup content if the form has not been submitted yet - default state', () => {
    const wrapper = shallow(<ContactUs />);
    expect(wrapper.find(Form)).to.have.length(1);
  });

  it('shows success content if the form has been submitted successfully', () => {
    const wrapper = shallow(<ContactUs />);
    wrapper.setState({
      success: true,
    });
    expect(wrapper.find(Success)).to.have.length(1);
  });
});
