import React from 'react';
import { render } from 'enzyme';

import { Context } from '../../../../components/link/test-helper';
import CarTrawler from './index';

jest.mock(
  '../shared/what-to-read-next',
  () => require.requireActual('../shared/test-helper').default,
);

describe('site/pages/our-work/case-study/car-trawler-my-account/', () => {
  it('renders correctly', () => {
    expect(
      render(
        <Context>
          <CarTrawler />
        </Context>,
      ),
    ).toMatchSnapshot();
  });
});
