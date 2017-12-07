// @flow
import React, { PropTypes } from 'react';
import { StateNavigator } from 'navigation';
import { NavigationLink } from 'navigation-react';

export default class Link extends React.Component {
  static contextTypes = {
    // The stateNavigator is provided by navigation-react and provides
    // access to the current route.
    stateNavigator: PropTypes.instanceOf(StateNavigator),
  };

  static propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    childActiveCssClass: PropTypes.string,
  };

  getStateNavigator(): StateNavigator {
    return this.context.stateNavigator;
  }

  hasActiveChild(): boolean {
    const currentStateParent = this.getStateNavigator().stateContext.state.parentKey;
    return currentStateParent === this.props.to;
  }

  render() {
    const { to, childActiveCssClass, ...rest } = this.props;
    const appliedCssClass = this.hasActiveChild() ? childActiveCssClass : '';

    return (
      <NavigationLink stateKey={to} className={appliedCssClass} {...rest}>
        {this.props.children}
      </NavigationLink>
    );
  }
}
