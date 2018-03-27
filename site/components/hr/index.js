import React, { Component } from 'react';
import classNames from 'classnames';
import styles from './style.css';

type HRProps = {
  color: 'red' | 'grey',
  customClassName: string
}

export default class HR extends Component<HRProps> {

  defaultProps = {
    customClassName: 'horizontal-line',
  };

  render() {
    const hrClass = classNames({
      [styles.hr]: true,
      [styles.red]: this.props.color === 'red',
      [styles.grey]: this.props.color === 'grey',
      [this.props.customClassName]: true,
    });

    return <hr className={hrClass} />;
  }
}
