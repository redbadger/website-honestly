import React from 'react';
import classNames from 'classnames';
import * as textStyles from '../utils/text.css';
import styles from './styles.css';

export default function Paragraph({ align, children }) {
  const pClass = classNames(textStyles[align], styles.p);
  return <p className={pClass}>{children}</p>;
}

Paragraph.propTypes = {
  align: React.PropTypes.oneOf(['center', 'left', 'right']),
  children: React.PropTypes.node,
};
