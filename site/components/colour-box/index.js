// @flow
import React from 'react';
import classNames from 'classnames/bind';
import styles from './styles.css';

type Props = {
  children?: Node,
  className: 'blueSubHeading' | 'greenSubHeading' | 'redSubHeading' | 'yellowSubHeading',
  title: string,
};

const cx = classNames.bind(styles);

const ColourBox = ({ children, className, title }: Props) => {
  return (
    <div className={styles.listItem}>
      <h3 className={cx(className)}>{title}</h3>
      {children}
    </div>
  );
};

export default ColourBox;
