import React, { Component } from 'react';
import * as textStyles from '../utils/text.css';
import styles from './styles.css';
import classNames from 'classnames';

export default class Paragraph extends Component {
  static propTypes = {
    align: React.PropTypes.oneOf(['center', 'left', 'right']),
    children: React.PropTypes.node,
  };

  render() {
    const pClass = classNames(textStyles[this.props.align], styles.p);
    return <p className={pClass}>{this.props.children}</p>;
  }
}
