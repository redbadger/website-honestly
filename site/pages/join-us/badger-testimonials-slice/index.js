// @flow
import React, { useState } from 'react';
import SwipeableViews from 'react-swipeable-views';
import styles from './style.css';
import ClientOnly from '../../../components/clientOnly';
import Navigator from '../../../components/navigator';
import Testimonial from './testimonial';

import testimonials from './testimonials';

type Props = {
  navPositionBottom?: boolean,
};

const BadgerTestimonialsSlice = ({ navPositionBottom }: Props) => {
  const [currentIndex, setPage] = useState(0);

  return (
    <div className={styles.testimonials}>
      <div className={styles.container}>
        <ClientOnly>
          {!navPositionBottom && (
            <Navigator
              currentIndex={currentIndex}
              onChange={setPage}
              maxIndex={testimonials.length - 1}
            />
          )}
          <div className={navPositionBottom ? styles.content__bottomNav : styles.content}>
            <SwipeableViews index={currentIndex} onChangeIndex={setPage}>
              {testimonials.map(t => (
                <Testimonial
                  key={t.content}
                  content={t.content}
                  author={t.author}
                  role={t.role}
                  icon={t.icon}
                />
              ))}
            </SwipeableViews>
            {navPositionBottom && (
              <Navigator
                currentIndex={currentIndex}
                onChange={setPage}
                navPositionBottom
                maxIndex={testimonials.length - 1}
              />
            )}
          </div>
        </ClientOnly>
      </div>
    </div>
  );
};

export default BadgerTestimonialsSlice;
