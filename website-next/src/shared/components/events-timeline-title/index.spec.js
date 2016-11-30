import EventsTimelineTitle from './index.js';
import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

describe('EventsTimelineTitle component', () => {
  it('renders successfully with today timeline provided', () => {
    const wrapper = shallow(<EventsTimelineTitle timeline="today" />);
    expect(wrapper.find('h2').length).to.equal(1);
    expect(wrapper.find('h2').text()).to.equal('Today');
  });

  it('renders successfully with future timeline provided', () => {
    const wrapper = shallow(<EventsTimelineTitle timeline="future" />);
    expect(wrapper.find('h2').length).to.equal(1);
    expect(wrapper.find('h2').text()).to.equal('Upcoming events');
  });

  it('renders successfully with past timeline provided', () => {
    const wrapper = shallow(<EventsTimelineTitle timeline="past" />);
    expect(wrapper.find('h2').length).to.equal(1);
    expect(wrapper.find('h2').text()).to.equal('Past events');
  });

  it('does not return a result if not passed a timeline proeprty', () => {
    const wrapper = shallow(<EventsTimelineTitle />);
    expect(wrapper.find('h2').length).to.equal(0);
  });
});
