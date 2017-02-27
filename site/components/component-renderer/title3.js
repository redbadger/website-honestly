import React, { Component } from 'react';
import styles from './styles.css';

export default class Title3 extends Component {
  static propTypes = {
    children: React.PropTypes.node,
  };

  render() {
    return <h3 className={styles.h3}>{this.props.children}</h3>;
  }
}
