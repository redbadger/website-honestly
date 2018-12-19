// @flow
import React from 'react';
import classNames from 'classnames';
import styles from './style.css';

type HRProps = {
  color: 'red' | 'grey' | 'black',
  customClassName?: string,
};

const HR = ({ customClassName = 'horizontal-line', color }: HRProps) => {
  const hrClass = classNames({
    [styles.hr]: true,
    [styles.red]: color === 'red',
    [styles.grey]: color === 'grey',
    [styles.black]: color === 'black',
    [customClassName]: true,
  });

  return <hr className={hrClass} />;
};

export default HR;
