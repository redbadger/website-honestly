// @flow

import React from 'react';
import { shallow } from 'enzyme';

import Image from '.';

describe('site/pages/our-work/slices/shared/image', () => {
  it('renders the correct class by default', () => {
    const component = shallow(<Image src="path/to/image" alt="" />);
    expect(component).toMatchSnapshot();
  });
});
