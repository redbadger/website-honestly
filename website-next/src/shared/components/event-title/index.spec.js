import EventTitle from './index.js';
import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

describe('EventTitle component', () => {
  it('renders successfully with default props', () => {
    const wrapper = shallow(<EventTitle
      eventTitle={'Event title'}
      eventHref={'https://www.red-badger.com'}
    />);
    expect(wrapper.find('h2').length).to.equal(1);
  });
});
