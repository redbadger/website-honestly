import EventNewsMeta, { linksSection } from './index.js';
import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { defaultEvent } from '../../../../spec/fixtures/events.js';

describe('EventNewsMeta component', () => {
  it('renders successfully with all props provided', () => {
    const wrapper = shallow(<EventNewsMeta
      internalLinks={defaultEvent.internalLinks}
      externalLinks={defaultEvent.externalLinks}
      tags={defaultEvent.tags}
    />);
    expect(wrapper.find('div').length).to.equal(2);
  });

  it('renders successfully with only internal links provided', () => {
    const wrapper = shallow(<EventNewsMeta
      internalLinks={defaultEvent.internalLinks}
    />);
    expect(wrapper.find('div').length).to.equal(2);
  });

  it('renders successfully with only external links provided', () => {
    const wrapper = shallow(<EventNewsMeta
      externalLinks={defaultEvent.externalLinks}
    />);
    expect(wrapper.find('div').length).to.equal(2);
  });

  it('renders successfully with no links provided', () => {
    const wrapper = shallow(<EventNewsMeta />);
    expect(wrapper.find('div').length).to.equal(1);
  });
});

describe('Utility functions of EventNewsMeta component', () => {
  it('renders linksSection correctly when there are no links', () => {
    const wrapper = shallow(linksSection({}));
    expect(wrapper.find('div').length).to.equal(0);
    expect(wrapper.text()).to.equal('');
  });
  it('renders linksSection correctly with links', () => {
    const wrapper = shallow(linksSection({
      externalLinks: defaultEvent.externalLinks,
      internalLinks: defaultEvent.internalLinks,
    }));
    expect(wrapper.find('div').length).to.equal(1);
  });
});
