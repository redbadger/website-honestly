import React from 'react';
import PropTypes from 'prop-types';

import { mount } from 'enzyme';
import { StateNavigator } from 'navigation';

import { createMockContext } from '../../components/link/test-helper';

import PrivacyPolicy from './index';
import policies from './policy';

class Context extends React.Component<{ children: React.Node }> {
  static childContextTypes = {
    stateNavigator: PropTypes.instanceOf(StateNavigator),
  };

  getChildContext() {
    return createMockContext();
  }

  render() {
    return this.props.children;
  }
}

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
      mount(
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
