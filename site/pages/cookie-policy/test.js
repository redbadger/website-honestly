import React from 'react';
import { render } from 'enzyme';

import { Context } from '../../components/link/test-helper';

import CookiePolicy from './index';
import policies from './policy';

const social = {
  title: 'Red Badger',
  description:
    'Let’s make things better. We are digital transformation experts who innovate and deliver.',
  metaImage: '',
  altText: 'Red Badger logo',
  url: 'cookie-policy',
};

describe('site/pages/cookie-policy', () => {
  it('renders correctly', () => {
    expect(
      render(
        <Context>
          <CookiePolicy
            title="Cookies Policy"
            effectiveDate="24 of May 2018"
            policies={policies}
            social={social}
          />
        </Context>,
      ),
    ).toMatchSnapshot();
  });
});
