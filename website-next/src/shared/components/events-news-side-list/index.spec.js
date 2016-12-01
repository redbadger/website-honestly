import EventsNewsSideList, { entryDateTimeMap } from './index.js';
import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { defaultEvent } from '../../../../spec/fixtures/events.js';
import { defaultNews } from '../../../../spec/fixtures/news.js';

describe('EventsNewsSideList component', () => {
  it('renders successfully with default props', () => {
    const wrapper = shallow(<EventsNewsSideList
      entryList={[defaultEvent]}
      title="Recent events"
      entryType="event"
    />);
    expect(wrapper.find('li').length).to.equal(1);
  });
});

describe('entryDateTimeMap utility', () => {
  it('correctly maps date params for events', () => {
    const eventDateTime = {
      year: '2016',
      month: '06',
      date: '25',
    };
    expect(entryDateTimeMap('event',
      defaultEvent)).to.deep.equal(eventDateTime);
  });
  it('correctly maps date params for news', () => {
    const newsDateTime = {
      year: '2015',
      month: '10',
      date: '02',
    };
    expect(entryDateTimeMap('news',
      defaultNews)).to.deep.equal(newsDateTime);
  });
});
