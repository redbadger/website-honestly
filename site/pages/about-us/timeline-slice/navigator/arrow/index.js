// @flow
import React from 'react';
import classnames from 'classnames/bind';
import styles from './style.css';

const cx = classnames.bind(styles);

type ArrowProps = {
  direction: string,
  onClick: Function,
  currentIndex: number,
};

const Arrow = ({ direction, onClick, currentIndex }: ArrowProps) => {
  const LAST_INDEX = 7;
  const click = () => {
    let newIndex = currentIndex;
    if (direction === 'left' && currentIndex > 0) {
      newIndex = currentIndex - 1;
    } else if (direction === 'right' && currentIndex < LAST_INDEX) {
      newIndex = currentIndex + 1;
    }
    onClick(newIndex);
  };

  const isClickable =
    (direction === 'left' && currentIndex > 0) ||
    (direction === 'right' && currentIndex < LAST_INDEX);

  return (
    <button
      className={cx('arrow', direction === 'left' ? 'arrowLeft' : 'arrowRight')}
      onClick={click}
      aria-label={direction}
    >
      <div className={isClickable ? styles.active : styles.inactive} />
      <div className={styles.innerArrow} />
    </button>
  );
};

export default Arrow;
