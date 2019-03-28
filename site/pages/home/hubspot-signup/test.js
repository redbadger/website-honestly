import React from 'react';
import { render } from 'enzyme';

import { Context } from '../../../components/link/test-helper';

import HubspotSignup from './index';

describe('site/pages/home/hubspot-signup', () => {
  it('renders correctly', () => {
    expect(
      render(
        <Context>
          <HubspotSignup />
        </Context>,
      ),
    ).toMatchSnapshot();
  });
});
