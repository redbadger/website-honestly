// @flow
import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import styles from './style.css';
import ClientOnly from '../../../components/clientOnly';
import Navigator from './navigator';

import testimonialData from './testimonials.json';
import shortTestimonial from './testimonial-component/short-testimonial.css';
import commonStyles from './testimonial-component/common-styles.css';
import Testimonial from './testimonial-component';

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
                <Testimonial
                  styles={commonStyles}
                  content={testimonialData.one.content}
                  author={testimonialData.one.author}
                />
                <Testimonial
                  styles={commonStyles}
                  content={testimonialData.two.content}
                  author={testimonialData.two.author}
                />
                <Testimonial
                  styles={commonStyles}
                  content={testimonialData.three.content}
                  author={testimonialData.three.author}
                />
                <Testimonial
                  styles={shortTestimonial}
                  content={testimonialData.four.content}
                  author={testimonialData.four.author}
                />
                <Testimonial
                  styles={commonStyles}
                  content={testimonialData.five.content}
                  author={testimonialData.five.author}
                />
              </SwipeableViews>
            </div>
          </ClientOnly>
        </div>
      </div>
    );
  }
}

export default ClientTestimonialsSlice;
