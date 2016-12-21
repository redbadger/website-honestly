import React, { PropTypes, Component } from 'react';

/** Only render the children of this component if JavaScript is enabled and we are in the browser */
class ClientOnly extends Component {

  componentWillMount() {
    this.setState({
      javaScriptSupported: false,
    });
  }

  componentDidMount() {
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

ClientOnly.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ClientOnly;
