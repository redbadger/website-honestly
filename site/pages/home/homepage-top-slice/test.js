import React from 'react';
import { render } from 'enzyme';

import { Context } from '../../../components/link/test-helper';
import HomepageTopSlice from './index';

describe('site/pages/home/homepage-top-slice/', () => {
  it('renders correctly', () => {
    expect(
      render(
        <Context>
          <HomepageTopSlice />
        </Context>,
      ),
    ).toMatchSnapshot();
  });
});
