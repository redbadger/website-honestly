import React, { PropTypes } from 'react';
import { NavigationLink } from 'navigation-react';

let stateNavigator;

export default function Link({ to, children }) {
  return (
    <NavigationLink
      stateKey={to}
      stateNavigator={stateNavigator}
    >
      {children}
    </NavigationLink>
  );
}

Link.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export function registerStateNavigator(sn) {
  stateNavigator = sn;
}
