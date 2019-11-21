// @flow
import React, { type Node, useContext } from 'react';
import { StateNavigator } from 'navigation';
import { NavigationLink, NavigationContext } from 'navigation-react';

export type LinkProps = {
  to: string,
  children?: Node,
  activeCssClass?: string,
  target?: string,
  'data-link'?: string,
};

/**
 * Checks if the currently active state is a child (direct or nested) of
 * the state specified in the `to` property. Returns true, if this is the
 * case; otherwise false.
 */
const hasActiveChild = (stateNavigator: StateNavigator, target: string): boolean => {
  let { state } = stateNavigator.stateContext;
  while (state.parentKey) {
    if (state.parentKey === target) {
      return true;
    }

    state = stateNavigator.states[state.parentKey];
  }

  return false;
};

export default function Link(props: LinkProps) {
  const { to, ...rest } = props;
  const { stateNavigator } = useContext(NavigationContext);

  return (
    <NavigationLink
      stateKey={to}
      className={hasActiveChild(stateNavigator, to) ? props.activeCssClass : ''}
      navigating={() => props.target !== '_blank'}
      rel={props.target === '_blank' ? 'noopener noreferrer' : null}
      {...rest}
    >
      {props.children}
    </NavigationLink>
  );
}
