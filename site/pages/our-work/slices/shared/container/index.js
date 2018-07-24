// @flow

import * as React from 'react';
import cx from 'classnames';

import Link from '../../../../../components/link';
import styles from './styles.css';

type Props = {
  children: React.ChildrenArray<React.Element<'*'>>,
  layout?: 'row' | 'row-reverse',
  to: string,
  paddingBottom?: boolean,
};

export default function Container({ children, to, layout = 'row', paddingBottom = true }: Props) {
  return (
    <div className={paddingBottom ? styles.container : styles.containerNoPaddingBottom}>
      <Link to={to} className={cx(styles.content, styles[layout])}>
        {children}
      </Link>
    </div>
  );
}
