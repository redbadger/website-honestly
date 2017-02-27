import React, { Component } from 'react';
import styles from './styles.css';

export default class Link extends Component {
  static propTypes = {
    children: React.PropTypes.node,
    href: React.PropTypes.string.isRequired,
  };

  render() {
    return (
      <a className={styles.a} href={this.props.href}>{this.props.children}</a>
    );
  }
}
