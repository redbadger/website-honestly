/*
* This component is ported from Website Next and is meant to be
* used only by Jobs and Events components
*/

import React, { Component } from 'react';
import styles from './style.css';

export default class Section extends Component {
  static propTypes = {
    children: React.PropTypes.node,
  };

  render() {
    return (
      <section className={styles.section}>
        {this.props.children}
      </section>
    );
  }
}
