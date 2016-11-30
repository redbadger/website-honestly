import React, { Component } from 'react';
import styles from './styles.css';

export default class Title1 extends Component {
  static propTypes = {
    children: React.PropTypes.node,
  };

  render() {
    return <h1 className={styles.h1}>{this.props.children}</h1>;
  }
}
