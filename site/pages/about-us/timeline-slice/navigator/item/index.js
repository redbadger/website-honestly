// @flow
import React from 'react';
import styles from './style.css';

type TimelineNavProps = {
  value: number,
  currentIndex: number,
  onClick: Function,
};

const TimelineNav = ({ value, onClick, currentIndex }: TimelineNavProps) => {
  let className = styles.old;
  if (value === currentIndex) {
    className = styles.active;
  }

  if (value > currentIndex) {
    className = styles.future;
  }

  const click = () => onClick(value);

  return (
    <button tabIndex={0} className={className} onClick={click} aria-label={`slide ${value + 1}`}>
      <span />
    </button>
  );
};

export default TimelineNav;
