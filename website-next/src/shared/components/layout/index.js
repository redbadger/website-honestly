import React, { Component } from 'react';
import Header from '../header';
import Footer from '../footer';

export default class Layout extends Component {
  static propTypes = {
    children: React.PropTypes.node,
  };

  render() {
    return (
      <div>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}
