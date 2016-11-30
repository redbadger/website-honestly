import EventsListEntry from './index.js';
import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { defaultEvent } from '../../../../spec/fixtures/events.js';

describe('EventsListEntry component', () => {
  it('renders successfully with default props', () => {
    const wrapper = shallow(<EventsListEntry
      timeline="past"
      {...defaultEvent}
    />);
    expect(wrapper.find('li').length).to.equal(1);
  });
});
