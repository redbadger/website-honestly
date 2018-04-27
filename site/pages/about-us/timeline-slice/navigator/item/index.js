// @flow
import React from 'react';
import styles from './style.css';

type TimelineNavProps = {
  value: number,
  currentIndex: number,
};

const TimelineNav = ({ value, currentIndex }: TimelineNavProps) => {
  let className = styles.old;
  if (value === currentIndex) {
    className = styles.active;
  }

  if (value > currentIndex) {
    className = styles.future;
  }

  return (
    <div className={className} aria-label={`slide ${value + 1}`}>
      <span />
    </div>
  );
};

export default TimelineNav;
