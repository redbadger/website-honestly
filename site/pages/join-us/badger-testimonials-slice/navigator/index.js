// @flow
import React from 'react';
import styles from './style.css';
import Item from '../../../../components/navigator/item';
import Arrow from '../../../../components/navigator/arrow';

import testimonials from '../testimonials';

type TestimonialNavProps = {
  currentIndex: number,
  onClick: Function,
};

const lastIndex = testimonials.length - 1;

const TestimonialNav = ({ currentIndex, onClick }: TestimonialNavProps) => {
  return (
    <div className={styles.navigator}>
      <div className={styles.container}>
        <Arrow
          direction="left"
          onClick={onClick}
          currentIndex={currentIndex}
          lastIndex={lastIndex}
        />
        <div className={styles.testimonials}>
          {testimonials.map((testimonial, index) => (
            <Item
              key={testimonial.content}
              value={index}
              onClick={onClick}
              currentIndex={currentIndex}
            />
          ))}
        </div>
        <Arrow
          direction="right"
          onClick={onClick}
          currentIndex={currentIndex}
          lastIndex={lastIndex}
        />
      </div>
    </div>
  );
};

export default TestimonialNav;
