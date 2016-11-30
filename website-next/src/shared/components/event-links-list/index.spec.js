import EventLinksList from './index.js';
import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { defaultEvent } from '../../../../spec/fixtures/events.js';

describe('EventLinksList component', () => {
  it('renders successfully with default props', () => {
    const wrapper = shallow(<EventLinksList
      linkList={defaultEvent.internalLinks}
      listType="internal"
    />);
    expect(wrapper.find('a').length).to.equal(1);
  });

  it('renders nothing when linkList is missing', () => {
    const wrapper = shallow(<EventLinksList
      listType="internal"
    />);
    expect(wrapper.find('a').length).to.equal(0);
    expect(wrapper.text()).to.equal('');
  });
});
