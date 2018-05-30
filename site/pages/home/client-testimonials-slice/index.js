// @flow
import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import styles from './style.css';
import ClientOnly from '../../../components/clientOnly';
import Navigator from './navigator';
import Testimonial from './testimonial';

import testimonials from './testimonials';

type ClientTestimonialState = {
  currentIndex: number,
};

class ClientTestimonialsSlice extends React.Component<*, ClientTestimonialState> {
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
                {testimonials.map((t, i) => (
                  <Testimonial key={i} type={t.type} content={t.content} author={t.author} />
                ))}
              </SwipeableViews>
            </div>
          </ClientOnly>
        </div>
      </div>
    );
  }
}

export default ClientTestimonialsSlice;
