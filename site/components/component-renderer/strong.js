import React, { Component } from 'react';
import styles from '../../css/typography/_fonts.css';

export default class Paragraph extends Component {
  static propTypes = {
    children: React.PropTypes.node.isRequired,
  };

  render() {
    return (
      <strong className={styles.boldSansSerif}>
        {this.props.children}
      </strong>
    );
  }
}
