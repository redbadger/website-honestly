// @flow
import * as React from 'react';
import classnames from 'classnames/bind';

import styles from './style.css';

type CardProps = {
  className?: string,
  children?: React.Node,
};

const cx = classnames.bind(styles);

const Card = ({ className, children }: CardProps) => {
  return <div className={cx(styles.Card, className)}>{children}</div>;
};

export default Card;
