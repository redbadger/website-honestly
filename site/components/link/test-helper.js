// @flow

import { StateNavigator } from 'navigation';
import PropTypes from 'prop-types';
import * as React from 'react';

function MockNavigator(parentKey) {
  // The constructor is checked in prop-types,
  // so we use it as base and then mutate
  const child = new StateNavigator();

  child.stateContext = {
    state: {
      parentKey,
    },
  };

  child.states = {
    foo: {},
    bar: {},
    barChild: {
      parentKey: 'bar',
    },
  };

  return child;
}

export function createMockContext(parentKey?: string) {
  return { stateNavigator: MockNavigator(parentKey) };
}

export class Context extends React.Component<{ children: React.Node }> {
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
