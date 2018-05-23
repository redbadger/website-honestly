// @flow
import React from 'react';
import styles from './style.css';

type TestimonialNavItemProps = {
  value: number,
  currentIndex: number,
};

const TestimonialNavItem = ({ value, currentIndex }: TestimonialNavItemProps) => {
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

export default TestimonialNavItem;
