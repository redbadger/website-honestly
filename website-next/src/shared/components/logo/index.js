import React, { Component } from 'react';
import styles from './style.css';
import image from './logo-newest.png';

export default class Logo extends Component {
  render() {
    return (
      <img alt="Red Badger Logo" className={styles.logo} src={image} />
    );
  }
}
