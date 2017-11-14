import React from 'react';
import classnames from 'classnames/bind';

import styles from './style.css';

const cx = classnames.bind(styles);

const Card = ({ className, children }) => {
  return <div className={cx(styles.Card, className)}>{children}</div>;
};

Card.propTypes = {
  className: React.PropTypes.string,
  children: React.PropTypes.node,
};

export default Card;
