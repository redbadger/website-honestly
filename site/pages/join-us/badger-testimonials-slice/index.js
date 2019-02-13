// @flow
import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import styles from './style.css';
import ClientOnly from '../../../components/clientOnly';
import Navigator from './navigator';
import Testimonial from './testimonial';

import testimonials from './testimonials';

type BadgerTestimonialState = {
  currentIndex: number,
};

class BadgerTestimonialsSlice extends React.Component<*, BadgerTestimonialState> {
  state = {
    currentIndex: 0,
  };

  setPage = (idx: number) => {
    this.setState({
      currentIndex: idx,
    });
  };

  render() {
    const { currentIndex } = this.state;

    return (
      <div className={styles.testimonials}>
        <div className={styles.container}>
          <ClientOnly>
            <Navigator currentIndex={currentIndex} onClick={this.setPage} />
            <div className={styles.content}>
              <SwipeableViews index={currentIndex} onChangeIndex={this.setPage}>
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
            </div>
          </ClientOnly>
        </div>
      </div>
    );
  }
}

export default BadgerTestimonialsSlice;
