import React, { Component } from 'react';
import styles from './style.css';

export default class Badge extends Component {
  render() {
    return (
      <a className={styles.badge} href="/"></a>
    );
  }
}
