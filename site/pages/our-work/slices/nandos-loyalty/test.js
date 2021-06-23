import React from 'react';
import { shallow } from 'enzyme';

import PagoFxSlide from './index';

describe('pages/our-work/case-study/slices/pride', () => {
  it('renders correctly', () => {
    const rendered = shallow(<PagoFxSlide />);
    expect(rendered).toMatchSnapshot();
  });
});
