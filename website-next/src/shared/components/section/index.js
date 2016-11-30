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
