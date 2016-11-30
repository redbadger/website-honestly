import React, { Component } from 'react';
import classNames from 'classnames';
import styles from './style.css';

export default class HR extends Component {
  static propTypes = {
    color: React.PropTypes.oneOf(['red', 'grey']),
    customClassName: React.PropTypes.string,
  };

  defaultProps = {
    customClassName: 'horizontal-line',
  };

  render() {
    const hrClass = classNames({
      [styles.hr]: true,
      [styles.red]: (this.props.color === 'red'),
      [styles.grey]: (this.props.color === 'grey'),
      [this.props.customClassName]: true,
    });

    return (
      <hr className={hrClass} />
    );
  }
}
