// @flow
import * as React from 'react';
import { StateNavigator } from 'navigation';
import { NavigationLink } from 'navigation-react';
import PropTypes from 'prop-types';

export type LinkProps = {
  to: string,
  children?: React.Node,
  activeCssClass?: string,
  target?: string,
};

export default class Link extends React.Component<LinkProps> {
  static contextTypes = {
    // The stateNavigator is provided by navigation-react and provides
    // access to the current route.
    stateNavigator: PropTypes.instanceOf(StateNavigator),
  };

  constructor(props: LinkProps) {
    super(props);

    this.shouldNavigate = this.shouldNavigate.bind(this);
  }

  getStateNavigator(): StateNavigator {
    return this.context.stateNavigator;
  }

  shouldNavigate: Function = this.shouldNavigate;
  props: LinkProps;

  /**
   * Checks if the currently active state is a child (direct or nested) of
   * the state specified in the `to` property. Returns true, if this is the
   * case; otherwise false.
   */
  hasActiveChild(): boolean {
    const stateNavigator = this.getStateNavigator();
    let { state } = stateNavigator.stateContext;
    while (state.parentKey) {
      if (state.parentKey === this.props.to) {
        return true;
      }

      state = stateNavigator.states[state.parentKey];
    }

    return false;
  }

  shouldNavigate(): boolean {
    return this.props.target !== '_blank';
  }

  render() {
    const { to, ...rest } = this.props;
    const appliedCssClass = this.hasActiveChild() ? this.props.activeCssClass : '';

    return (
      <NavigationLink
        stateKey={to}
        className={appliedCssClass}
        navigating={this.shouldNavigate}
        {...rest}
      >
        {this.props.children}
      </NavigationLink>
    );
  }
}
