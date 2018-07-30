// @flow

import React from 'react';
import { shallow } from 'enzyme';

import ReadMore from '.';

describe('site/pages/our-work/slices/shared/read-more', () => {
  it('renders the correct class by default', () => {
    const component = shallow(<ReadMore />);
    expect(component).toMatchSnapshot();
  });

  it('renders the centered class', () => {
    const component = shallow(<ReadMore center />);
    expect(component).toMatchSnapshot();
  });
});
