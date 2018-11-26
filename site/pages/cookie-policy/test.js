import React from 'react';
import { shallow } from 'enzyme';

import Cookies from './index';

describe('site/pages/cookie-policy', () => {
  it('renders correctly', () => {
    expect(shallow(<Cookies />)).toMatchSnapshot();
  });
});
