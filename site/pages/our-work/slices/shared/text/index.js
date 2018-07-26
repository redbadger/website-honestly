// @flow

import * as React from 'react';
import cx from 'classnames';

import styles from './styles.css';

type Props = {
  children: React.Node,
  layout?: 'leftCol' | 'rightCol' | 'fullWidth',
};

export default function Text({ children, layout = 'leftCol' }: Props) {
  const className = cx([styles[layout]]);
  return <div className={className}>{children}</div>;
}
