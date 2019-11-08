import React from 'react';
import { render } from 'enzyme';

import { Context } from '../../components/link/test-helper';

import Job from './index';

const job = {
  title: 'jobberty',
  description: 'job',
  fullDescription: 'job',
  applicationUrl: 'jobbington',
  slug: 'job',
};

describe('site/pages/home', () => {
  it('renders correctly', () => {
    expect(
      render(
        <Context>
          <Job job={job} />
        </Context>,
      ),
    ).toMatchSnapshot();
  });
});
