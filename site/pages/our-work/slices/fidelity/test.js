import React from 'react';
import { shallow } from 'enzyme';

import FidelitySlice from './index';

describe('pages/our-work/case-study/slices/fidelity', () => {
  it('renders correctly', () => {
    const rendered = shallow(<FidelitySlice />);
    expect(rendered).toMatchSnapshot();
  });
});
