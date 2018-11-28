import React from 'react';
import { mount } from 'enzyme';

import { Context } from '../../../components/link/test-helper';

import HubspotSignup from './index';

describe('site/pages/home/hubspot-signup', () => {
  it('renders correctly', () => {
    expect(
      mount(
        <Context>
          <HubspotSignup />
        </Context>,
      ),
    ).toMatchSnapshot();
  });
});
