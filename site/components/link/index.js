// @flow
import React, { PropTypes } from 'react';
import { NavigationLink } from 'navigation-react';

type LinkProps = {[id: string]: any}
export default function Link(props: LinkProps) {
  const { to, ...rest } = props;

  return (
    <NavigationLink
      stateKey={to}
      {...rest}
    >
      {props.children}
    </NavigationLink>
  );
}

Link.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
