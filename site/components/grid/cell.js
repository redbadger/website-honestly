// @flow
import classNames from 'classnames';
import * as React from 'react';
import styles from './style.css';

type CellProps = {
  breakOn?: string,
  children?: React.Node,
  hideOn?: 'smallestScreen' | 'smallScreen' | 'mediumScreen' | 'dont',
  size: number,
};

const Cell = ({ breakOn = 'smallestScreen', children, hideOn = 'dont', size }: CellProps) => {
  const cellClassNames = classNames({
    [styles[`responsive-cell-${breakOn}`]]: true,
    [styles.cell]: true,
    [styles[`size${size}of12`]]: !!size,
    [styles[`hideOn${hideOn}`]]: true,
  });

  return <div className={cellClassNames}>{children}</div>;
};

export default Cell;
