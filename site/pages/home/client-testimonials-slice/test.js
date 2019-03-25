import React from 'react';
import { mount } from 'enzyme';

import { Context } from '../../../components/link/test-helper';

import ClientTestimonialSlice from './index';
// import testimonals from './testimonials';

describe('site/pages/home/client-testimonal-slice', () => {
  it('renders correctly', () => {
    expect(
      mount(
        <Context>
          <ClientTestimonialSlice />
        </Context>,
      ),
    ).toMatchSnapshot();
  });
});
