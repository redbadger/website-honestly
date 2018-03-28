// @flow
import * as React from 'react';

type ClientOnlyProps = {
  children: React.Node,
};

type ClientOnlyState = {
  javaScriptSupported: boolean,
};

/** Only render the children of this component if JavaScript is enabled and we are in the browser */
class ClientOnly extends React.Component<ClientOnlyProps, ClientOnlyState> {
  state = {
    javaScriptSupported: false,
  };

  componentDidMount() {
    // eslint-disable-next-line react/no-did-mount-set-state
    this.setState({
      javaScriptSupported: true,
    });
  }

  render() {
    const { javaScriptSupported } = this.state;
    const { children } = this.props;
    return javaScriptSupported ? <span>{children}</span> : null;
  }
}

export default ClientOnly;
