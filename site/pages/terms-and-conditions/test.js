import React from 'react';
import { shallow } from 'enzyme';

import Terms from './index';

describe('site/pages/terms-and-conditions', () => {
  it('renders correctly', () => {
    expect(shallow(<Terms />)).toMatchSnapshot();
  });
});
