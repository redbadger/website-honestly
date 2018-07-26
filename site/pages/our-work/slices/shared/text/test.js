// @flow

import React from 'react';
import { shallow } from 'enzyme';

import Text from '.';

describe('site/pages/our-work/slices/shared/text', () => {
  it('renders the correct layout class by default', () => {
    const component = shallow(<Text>hey joe</Text>);
    expect(component).toMatchSnapshot();
  });
  it('renders the correct layout class', () => {
    const component = shallow(<Text layout="fullWidth">hey joe</Text>);
    expect(component).toMatchSnapshot();
  });
});
