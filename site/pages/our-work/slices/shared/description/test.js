// @flow

import React from 'react';
import { shallow } from 'enzyme';

import Description from '.';

describe('site/pages/our-work/slices/shared/description', () => {
  it('renders the correct class by default', () => {
    const component = shallow(<Description>Some text</Description>);
    expect(component).toMatchSnapshot();
  });

  it('renders the maxWidth class', () => {
    const component = shallow(<Description maxWidth>Some text that needs to wrap</Description>);
    expect(component).toMatchSnapshot();
  });
});
