// @flow
/**
 * Grid Component
 *
 * The grid component is used to create a grid layout. It should
 * contain one or more Cell Components. The grid defaults to have
 * gutters between Cells.
 *
 * Grid
 * @props: {
 *   fit: {Boolean}, make all cells fit into a single row
 *   breakOn: {String}, responsive grid, will break when a given
 *            breakpoint is met. Check for breakpoint names in
 *            css/_sizes.css. Default value is `smallScreen`.
 * }
 *
 * Cell
 * @props: {
 *   size: {Number}, number of columns to span out of 12
 * }
 *
 */

/* eslint react/no-multi-comp: 0 */
import * as React from 'react';
import classNames from 'classnames';
import styles from './style.css';

type GridProps = {
  breakOn?: string,
  children?: React.Node,
  fit?: boolean,
};

export const Grid = ({ breakOn = 'smallScreen', children, fit }: GridProps) => {
  const gridClassNames = classNames({
    [styles.grid]: true,
    [styles.withGutter]: true,
    [styles.fit]: fit,
    // $FlowIgnore
    [`responsive-grid-${breakOn}`]: true,
  });

  return <div className={gridClassNames}>{children}</div>;
};

export { default as Cell } from './cell';
