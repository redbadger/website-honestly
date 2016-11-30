import React, { Component } from 'react';
import styles from './style.css';

export default class Note extends Component {
  static propTypes = {
    children: React.PropTypes.node.isRequired,
  };

  render() {
    return (
      <div className={styles.note}>
        {this.props.children}
      </div>
    );
  }
}
