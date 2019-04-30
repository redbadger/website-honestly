// @flow

import React, { useState } from 'react';
import SwipeableViews from 'react-swipeable-views';
import styles from './style.css';
import ClientOnly from '../../../components/clientOnly';
import Navigator from '../../../components/navigator';
import Testimonial from './testimonial';

import testimonials from './testimonials';

const ClientTestimonialsSlice = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className={styles.testimonials}>
      <div className={styles.container}>
        <ClientOnly>
          <Navigator
            currentIndex={currentIndex}
            onChange={setCurrentIndex}
            maxIndex={testimonials.length - 1}
          />
          <div className={styles.content}>
            <SwipeableViews index={currentIndex} onChangeIndex={setCurrentIndex}>
              {testimonials.map(t => (
                <Testimonial key={t.content} type={t.type} content={t.content} author={t.author} />
              ))}
            </SwipeableViews>
          </div>
        </ClientOnly>
      </div>
    </div>
  );
};

export default ClientTestimonialsSlice;
