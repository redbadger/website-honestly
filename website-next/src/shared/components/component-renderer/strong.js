import React, { Component } from 'react';

export default class Paragraph extends Component {
  static propTypes = {
    children: React.PropTypes.node.isRequired,
  };

  render() {
    return <strong>{this.props.children}</strong>;
  }
}
