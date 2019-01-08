// @flow

import * as React from 'react';
import cx from 'classnames';

import Link from '../../../../../components/link';
import styles from './styles.css';

type Props = {
  children: React.Node,
  layoutRight?: boolean,
  to: string,
  removeBottomPadding?: boolean,
};

export default function Container({
  children,
  to,
  layoutRight,
  removeBottomPadding = false,
}: Props) {
  const layout = layoutRight ? 'row-reverse' : 'row';
  return (
    <div className={removeBottomPadding ? styles.containerNoPaddingBottom : styles.container}>
      <Link to={to} className={cx(styles.content, styles[layout])}>
        {children}
      </Link>
    </div>
  );
}
