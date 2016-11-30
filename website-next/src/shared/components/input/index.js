import React, { Component } from 'react';
import classNames from 'classnames';
import styles from './style.css';

export default class Input extends Component {
  render() {
    const { className, ...other } = this.props;
    const inputClass = classNames(className, styles.input);

    return (
      <input {...other} className={inputClass}></input>
    );
  }
}

Input.propTypes = {
  className: React.PropTypes.string,
};
