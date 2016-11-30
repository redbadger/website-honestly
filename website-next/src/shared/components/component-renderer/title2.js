import React, { Component } from 'react';
import styles from './styles.css';

export default class Title2 extends Component {
  static propTypes = {
    children: React.PropTypes.node,
  };

  render() {
    return <h2 className={styles.h2}>{this.props.children}</h2>;
  }
}
