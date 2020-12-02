import React from 'react';
import { render } from 'enzyme';

import { Context } from '../../../../components/link/test-helper';
import PagoFx from './index';

jest.mock(
  '../shared/what-to-read-next',
  () => require.requireActual('../shared/test-helper').default,
);

describe('site/pages/our-work/case-study/pagofx/', () => {
  it('renders correctly', () => {
    expect(
      render(
        <Context>
          <PagoFx />
        </Context>,
      ),
    ).toMatchSnapshot();
  });
});
