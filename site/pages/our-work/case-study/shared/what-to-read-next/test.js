import React from 'react';
import { shallow } from 'enzyme';
import WhatToReadNext from '.';
import styles from './style.css';

describe('Case Study - What to read next', () => {
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

  it('component renders 1 chosen slice first', () => {
    const wrapper = shallow(<WhatToReadNext linkKeys={['retailer']} />);
    const rendered = wrapper.find('WhatToReadNextSlice');
    expect(rendered.get(0).props.name).toEqual('Retailer');
    expect(rendered.get(1).props.name).not.toEqual('Retailer');
    expect(rendered.get(2).props.name).not.toEqual('Retailer');
  });

  it('component renders 3 chosen slices in given order', () => {
    const wrapper = shallow(<WhatToReadNext linkKeys={['sky', 'retailer', 'bank']} />);
    const rendered = wrapper.find('WhatToReadNextSlice');
    expect(rendered.get(0).props.name).toEqual('Sky');
    expect(rendered.get(1).props.name).toEqual('Retailer');
    expect(rendered.get(2).props.name).toEqual('Financial services');
  });

  it('component renders Link to our work page', () => {
    const wrapper = shallow(<WhatToReadNext />);
    const rendered = wrapper.find('Link');
    expect(rendered.first().props().to).toEqual('ourWorkPage');
  });
});
