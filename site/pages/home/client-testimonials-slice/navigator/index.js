// @flow
import React from 'react';
import styles from './style.css';
import Item from './item';
import Arrow from './arrow';

type TestimonialNavProps = {
  currentIndex: number,
  onClick: Function,
};

const TestimonialNav = ({ currentIndex, onClick }: TestimonialNavProps) => {
  return (
    <div className={styles.navigator}>
      <div className={styles.container}>
        <Arrow direction="left" onClick={onClick} currentIndex={currentIndex} />
        <div className={styles.testimonials}>
          <Item value={0} onClick={onClick} currentIndex={currentIndex} />
          <Item value={1} onClick={onClick} currentIndex={currentIndex} />
          <Item value={2} onClick={onClick} currentIndex={currentIndex} />
          <Item value={3} onClick={onClick} currentIndex={currentIndex} />
          <Item value={4} onClick={onClick} currentIndex={currentIndex} />
        </div>
        <Arrow direction="right" onClick={onClick} currentIndex={currentIndex} />
      </div>
    </div>
  );
};

export default TestimonialNav;
