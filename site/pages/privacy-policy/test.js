import React from 'react';
import { render } from 'enzyme';

import { Context } from '../../components/link/test-helper';

import PrivacyPolicy from './index';
import policies from './policy';

const social = {
  title: 'Red Badger',
  description:
    'Let’s make things better. We are digital transformation experts who innovate and deliver.',
  metaImage: '',
  url: 'privacy-policy',
  altText: 'Red Badger logo',
};

describe('site/pages/privacy-policy', () => {
  it('renders correctly', () => {
    expect(
      render(
        <Context>
          <PrivacyPolicy
            title="Red Badger Privacy Statement"
            effectiveDate="23 May 2018"
            policies={policies}
            social={social}
          />
        </Context>,
      ),
    ).toMatchSnapshot();
  });
});
