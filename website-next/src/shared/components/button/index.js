import React, { Component } from 'react';
import classNames from 'classnames';
import styles from './style.css';

export default class Button extends Component {
  static propTypes = {
    className: React.PropTypes.string,
    href: React.PropTypes.string,
  };

  render() {
    const { className, ...other } = this.props;
    const buttonClass = classNames(className, styles.button);

    if (this.props.href) {
      return (
        <a {...other} className={buttonClass}></a>
      );
    }

    return (
      <button {...other} className={buttonClass}></button>
    );
  }
}
