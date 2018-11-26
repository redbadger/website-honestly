import React from 'react';
import { mount } from 'enzyme';

import { Context } from '../../components/link/test-helper';

import Terms from './index';
import policies from './policy';

const social = {
  title: 'Red Badger',
  description:
    'Let’s make things better. We are digital transformation experts who innovate and deliver.',
  metaImage: '',
  altText: 'Red Badger logo',
  url: 'terms-and-conditions',
};

describe('site/pages/terms-and-conditions', () => {
  it('renders correctly', () => {
    expect(
      mount(
        <Context>
          <Terms
            title="Website Terms"
            effectiveDate="7 of June 2018"
            policies={policies}
            social={social}
          />
        </Context>,
      ),
    ).toMatchSnapshot();
  });
});
