import React from 'react';
import { render } from 'enzyme';

import { Context } from '../../../../components/link/test-helper';
import CaseStudyFortnumAndMason from './index';

jest.mock(
  '../shared/what-to-read-next',
  () => require.requireActual('../shared/test-helper').default,
);

describe('site/pages/our-work/case-study/fortnum-and-mason/', () => {
  it('renders correctly', () => {
    expect(
      render(
        <Context>
          <CaseStudyFortnumAndMason />
        </Context>,
      ),
    ).toMatchSnapshot();
  });
});
