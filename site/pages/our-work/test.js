import React from 'react';
import { render } from 'enzyme';

import { Context } from '../../components/link/test-helper';

import CaseStudies from './index';

describe('site/pages/our-work', () => {
  it('renders correctly', () => {
    expect(
      render(
        <Context>
          <CaseStudies />
        </Context>,
      ),
    ).toMatchSnapshot();
  });
});
