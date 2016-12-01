import React, { Component } from 'react';
import styles from './style.css';

export default class NavItem extends Component {
  static propTypes = {
    active: React.PropTypes.bool,
    href: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired,
  };

  render() {
    return (
      <li className={styles.navItem}>
        <a className={styles.navItemLink}
          href={this.props.href}>{this.props.title}</a>
        {(this.props.active ? <div className={styles.active} /> : undefined)}
      </li>
    );
  }
}
