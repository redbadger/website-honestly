// @flow
import classNames from 'classnames';
import * as React from 'react';
import styles from './style.css';

type CellProps = {
  breakOn: string,
  children?: React.Node,
  hideOn: 'mobileS' | 'mobileSM' | 'mobile' | 'tablet' | 'dont',
  size:number
}

export default class Cell extends React.Component<CellProps> {

  static defaultProps = {
    breakOn: 'mobile',
    hideOn: 'dont',
  };

  render() {
    const cellClassNames = classNames({
      [styles[`responsive-cell-${this.props.breakOn}`]]: true,
      [styles.cell]: true,
      [styles[`size${this.props.size}of12`]]: !!this.props.size,
      [styles[`hideOn${this.props.hideOn}`]]: true,
    });

    return <div className={cellClassNames}>{this.props.children}</div>;
  }
}
