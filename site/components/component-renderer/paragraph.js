// @flow
import * as React from 'react';
import classNames from 'classnames';
import * as textStyles from '../utils/text.css';
import styles from './styles.css';

type ParagraphProps = {
  align: 'center' | 'left' | 'right',
  children?: React.Node,
};

export default function Paragraph({ align, children }: ParagraphProps) {
  const pClass = classNames(textStyles[align], styles.p);
  return <p className={pClass}>{children}</p>;
}
