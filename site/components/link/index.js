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
    activeCssClass: PropTypes.string,
  };

  getStateNavigator(): StateNavigator {
    return this.context.stateNavigator;
  }

  /**
   * Checks if the currently active state is a child (direct or nested) of
   * the state specified in the `to` property. Returns true, if this is the
   * case; otherwise false.
   */
  hasActiveChild(): boolean {
    const stateNavigator = this.getStateNavigator();
    let state = stateNavigator.stateContext.state;
    while (state.parentKey) {
      if (state.parentKey === this.props.to) {
        return true;
      }

      state = stateNavigator.states[state.parentKey];
    }

    return false;
  }

  render() {
    const { to, ...rest } = this.props;
    const appliedCssClass = this.hasActiveChild() ? this.props.activeCssClass : '';

    return (
      <NavigationLink stateKey={to} className={appliedCssClass} {...rest}>
        {this.props.children}
      </NavigationLink>
    );
  }
}
