import React from 'react';
import { render } from 'enzyme';

import { Context } from '../../components/link/test-helper';

import HomePage from './index';

jest.mock('../../components/case-study-overview/daysSinceFortnumStarted.js', () => () => '2,000');
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
  jest.unmock('../../components/case-study-overview/daysSinceFortnumStarted.js');
});
