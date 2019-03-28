import React from 'react';
import { render } from 'enzyme';

import { Context } from '../../../../components/link/test-helper';
import MockedWhatToReadNext from '../shared/test-helper';
import BBCCaseStudy from './index';

jest.mock('../shared/what-to-read-next', () => MockedWhatToReadNext);

describe('site/pages/our-work/case-study/bbc/', () => {
  it('renders correctly', () => {
    expect(
      render(
        <Context>
          <BBCCaseStudy />
        </Context>,
      ),
    ).toMatchSnapshot();
  });
});
