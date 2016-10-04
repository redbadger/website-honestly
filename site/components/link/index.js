import React, { PropTypes } from 'react';
import { NavigationLink } from 'navigation-react';

let stateNavigator;

export default function Link(props) {
  const linkProps = Object.assign({}, props, {
    stateKey: props.to,
    stateNavigator,
  });

  return (
    <NavigationLink
      {...linkProps}
    >
      {props.children}
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
