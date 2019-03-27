import React from 'react';
import { mount } from 'enzyme';

import { Context } from '../../../../components/link/test-helper';
import MockedWhatToReadNext from '../shared/test-helper';
import FMTeaCaseStudy from './index';

jest.mock('../shared/what-to-read-next', () => MockedWhatToReadNext);

describe('site/pages/our-work/case-study/fortnum-and-mason-digital-transformation/', () => {
  it('renders correctly', () => {
    expect(
      mount(
        <Context>
          <FMTeaCaseStudy />
        </Context>,
      ),
    ).toMatchSnapshot();
  });
});
