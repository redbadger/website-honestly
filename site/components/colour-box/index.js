// @flow
import React from 'react';
import classNames from 'classnames/bind';
import styles from './styles.css';

type Props = {
  children?: Node,
  title: string,
  labelColour: 'blue' | 'green' | 'red' | 'yellow',
};

const ColourBox = ({ children, labelColour, title }: Props) => {
  const styled = classNames({
    [styles[`${labelColour}SubHeading`]]: labelColour,
  });
  return (
    <div className={styles.listItem}>
      <h3 className={styled}>{title}</h3>
      {children}
    </div>
  );
};

export default ColourBox;
