import React from 'react';
import { mount } from 'enzyme';

import { Context } from '../../../../components/link/test-helper';
import MockedWhatToReadNext from '../shared/test-helper';
import SkyCaseStudy from './index';

jest.mock('../shared/what-to-read-next', () => MockedWhatToReadNext);

describe('site/pages/our-work/case-study/sky/', () => {
  it('renders correctly', () => {
    expect(
      mount(
        <Context>
          <SkyCaseStudy />
        </Context>,
      ),
    ).toMatchSnapshot();
  });
});
