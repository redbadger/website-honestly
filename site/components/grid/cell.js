import classNames from 'classnames';
import React, { Component } from 'react';
import styles from './style.css';

export default class Cell extends Component {
  static propTypes = {
    // Fine tuning exact screen size breakpoint when
    // horizontal cells are broken into vertical row
    breakOn: React.PropTypes.string,

    children: React.PropTypes.node,

    // Using breakpoint definitions from breakpoints.css
    // to allow this cell content to be hidden when needed
    hideOn: React.PropTypes.oneOf(['mobileS', 'mobileSM', 'mobile', 'tablet', 'dont']),

    size: React.PropTypes.number,
  };

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

    return (
      <div className={cellClassNames}>
        {this.props.children}
      </div>
    );
  }
}
