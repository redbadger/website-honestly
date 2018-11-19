import React from 'react';
import { shallow } from 'enzyme';

import PrideSlice from './index';

describe('pages/our-work/case-study/slices/pride', () => {
  it('renders correctly', () => {
    const rendered = shallow(<PrideSlice />);
    expect(rendered).toMatchSnapshot();
  });
});
