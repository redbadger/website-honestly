import React from 'react';
import { render } from 'enzyme';

import { Context } from '../../../../components/link/test-helper';
import SkyCaseStudy from './index';

jest.mock(
  '../shared/what-to-read-next',
  () => require.requireActual('../shared/test-helper').default,
);

describe('site/pages/our-work/case-study/sky/', () => {
  it('renders correctly', () => {
    expect(
      render(
        <Context>
          <SkyCaseStudy />
        </Context>,
      ),
    ).toMatchSnapshot();
  });
});
