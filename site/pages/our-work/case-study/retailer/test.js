import React from 'react';
import { render } from 'enzyme';

import { Context } from '../../../../components/link/test-helper';
import CaseStudyRetailer from './index';

jest.mock(
  '../shared/what-to-read-next',
  () => require.requireActual('../shared/test-helper').default,
);

describe('site/pages/our-work/case-study/retailer/', () => {
  it('renders correctly', () => {
    expect(
      render(
        <Context>
          <CaseStudyRetailer />
        </Context>,
      ),
    ).toMatchSnapshot();
  });
});
