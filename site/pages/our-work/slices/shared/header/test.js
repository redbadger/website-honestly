// @flow

import React from 'react';
import { shallow } from 'enzyme';

import Header from '.';

describe('site/pages/our-work/slices/shared/header', () => {
  it('renders correctly', () => {
    const component = shallow(<Header>heading</Header>);
    expect(component).toMatchSnapshot();
  });
});
