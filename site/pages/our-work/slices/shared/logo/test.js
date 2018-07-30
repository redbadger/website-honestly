// @flow

import React from 'react';
import { shallow } from 'enzyme';

import Logo from '.';

describe('site/pages/our-work/slices/shared/logo', () => {
  it('renders correctly', () => {
    const component = shallow(<Logo src="path/to/image" slice="camden" />);
    expect(component).toMatchSnapshot();
  });
});
