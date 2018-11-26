import React from 'react';
import PropTypes from 'prop-types';

import { mount } from 'enzyme';
import { StateNavigator } from 'navigation';

import { createMockContext } from '../../components/link/test-helper';

import Terms from './index';
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
