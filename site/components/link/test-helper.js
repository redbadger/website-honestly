// @flow

import { StateNavigator } from 'navigation';
import * as React from 'react';
import { NavigationHandler } from 'navigation-react';
import makeAppNavigator from '../../routes';

import TrailingSlashHistoryManager from '../../routes/history-manager';

export function mockNavigator(parentKey?: string = 'foo') {
  // The constructor is checked in prop-types,
  // so we use it as base and then mutate

  const navigator = new StateNavigator(
    [
      { key: 'foo', route: 'foo' },
      { key: 'bar', route: 'bar' },
      { key: 'barChild', route: 'bar/child', parentKey: 'bar' },
    ],
    new TrailingSlashHistoryManager(),
  );

  navigator.navigate(parentKey);

  return navigator;
}

type Props = {
  stateNavigator?: StateNavigator,
  children: React.Node,
};

const initStateNavigator = () => {
  const navigator = makeAppNavigator();

  navigator.navigateLink('/');

  return navigator;
};

export const Context = (props: Props) => {
  const { children, stateNavigator = initStateNavigator() } = props;

  return <NavigationHandler stateNavigator={stateNavigator}>{children}</NavigationHandler>;
};
