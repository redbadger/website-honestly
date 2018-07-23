// @flow

import * as React from 'react';
import classNames from 'classnames/bind';

import Link from '../../../../components/link';
import styles from './styles.css';

type Props = {
  children: React.ChildrenArray<React.Element<'div'>>,
  layout?: 'row' | 'row-reverse',
  to: string,
  flushBottom?: boolean,
};

export const SliceContainer = ({ children, layout = 'row', flushBottom = false, to }: Props) => (
  <div className={flushBottom ? styles.containerFlushBottom : styles.container}>
    <Link to={to} className={classNames(styles.content, styles[layout])}>
      {children}
    </Link>
  </div>
);
