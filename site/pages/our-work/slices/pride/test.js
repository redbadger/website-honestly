import React from 'react';
import { shallow } from 'enzyme';

import PrideSlice from './index';

describe(require('path').relative(process.cwd(), __dirname), () => {
  it('renders correctly', () => {
    const rendered = shallow(<PrideSlice />);
    expect(rendered).toMatchSnapshot();
  });
});
