import React from 'react';
import { render } from 'enzyme';

import { Context } from '../../components/link/test-helper';

import HomePage from './index';

describe('site/pages/home', () => {
  it('renders correctly', () => {
    expect(
      render(
        <Context>
          <HomePage />
        </Context>,
      ),
    ).toMatchSnapshot();
  });
});
