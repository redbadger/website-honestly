import React from 'react';
import { shallow } from 'enzyme';
import proxyquire from 'proxyquire';
import styles from './style.css';

proxyquire.noCallThru();

const mockSliceData = {
  slice1: {
    name: 'Slice One',
    tagline: 'Tagline 1',
    image: 'image.png',
    link: '/url',
  },
  slice2: {
    name: 'Slice Two',
    tagline: 'Tagline 2',
    image: 'image.png',
    link: '/url',
  },
  slice3: {
    name: 'Slice Three',
    tagline: 'Tagline 3',
    image: 'image.png',
    link: '/url',
  },
};

const WhatToReadNext = proxyquire('./index', {
  './data': mockSliceData,
}).default;

describe.only('Case Study - What to read next', () => {

  it('component renders successfully', () => {
    const wrapper = shallow(<WhatToReadNext />);
    expect(wrapper.find(styles.whatNext));
  });

  it('component renders 3 slices by default', () => {
    const wrapper = shallow(<WhatToReadNext />);
    const rendered = wrapper.find('WhatToReadNextSlice');
    expect(rendered.length === 3);
  });

  it('component renders maxNumberSlices slices', () => {
    const maxNumberSlices = 1;
    const wrapper = shallow(<WhatToReadNext maxNumberSlices={maxNumberSlices} />);
    const rendered = wrapper.find('WhatToReadNextSlice');
    expect(rendered.length === maxNumberSlices);
  });

  it('component renders 1 chosen slice', () => {
    const wrapper = shallow(<WhatToReadNext linkKeys={['slice1']} />);
    const rendered = wrapper.find('WhatToReadNextSlice');
    expect(rendered.get(0).props).to.have.property('name', 'Slice One');
    expect(rendered.get(1).props).to.not.have.property('name', 'Slice One');
    expect(rendered.get(2).props).to.not.have.property('name', 'Slice One');
  });

  it('component renders 3 chosen slices', () => {
    const wrapper = shallow(<WhatToReadNext linkKeys={['slice1', 'slice2', 'slice3']} />);
    const rendered = wrapper.find('WhatToReadNextSlice');
    expect(rendered.get(0).props).to.have.property('name', 'Slice One');
    expect(rendered.get(1).props).to.have.property('name', 'Slice Two');
    expect(rendered.get(2).props).to.have.property('name', 'Slice Three');
  });

  it('component renders Link to our work page', () => {
    const wrapper = shallow(<WhatToReadNext />);
    const rendered = wrapper.find('Link');
    expect(rendered.first().props()).to.have.property('to', 'ourWorkPage');
  });
});
