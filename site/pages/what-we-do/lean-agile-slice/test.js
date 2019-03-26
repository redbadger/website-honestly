import React from 'react';
import { mount } from 'enzyme';

import LeanAgileSlice from './index';

describe('site/pages/our-work/case-study/sky/', () => {
  it('renders correctly', () => {
    expect(mount(<LeanAgileSlice />)).toMatchSnapshot();
  });
});
