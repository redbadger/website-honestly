import React from 'react';
import { mount } from 'enzyme';

import { Context } from '../../../components/link/test-helper';
import HomepageTopSlice from './index';

describe('site/pages/home/homepage-top-slice/', () => {
  it('renders correctly', () => {
    expect(
      mount(
        <Context>
          <HomepageTopSlice />
        </Context>,
      ),
    ).toMatchSnapshot();
  });
});
