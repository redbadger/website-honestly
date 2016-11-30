import EventsList from './index.js';
import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { defaultEvent } from '../../../../spec/fixtures/events.js';

describe('EventsList component', () => {
  it('renders successfully with default props', () => {
    const wrapper = shallow(<EventsList
      timeline="past"
      events={[
        defaultEvent,
      ]}
    />);
    expect(wrapper.find('ul').length).to.equal(1);
  });
});
