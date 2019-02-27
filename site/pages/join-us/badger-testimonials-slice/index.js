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

type BadgerTestimonialProps = {
  navPositionBottom?: boolean,
};

class BadgerTestimonialsSlice extends React.Component<
  BadgerTestimonialProps,
  BadgerTestimonialState,
> {
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
    const { navPositionBottom } = this.props;

    return (
      <div className={styles.testimonials}>
        <div className={styles.container}>
          <ClientOnly>
            {!navPositionBottom && <Navigator currentIndex={currentIndex} onClick={this.setPage} />}
            <div className={navPositionBottom ? styles.content__bottomNav : styles.content}>
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
              {navPositionBottom && (
                <Navigator currentIndex={currentIndex} onClick={this.setPage} navPositionBottom />
              )}
            </div>
          </ClientOnly>
        </div>
      </div>
    );
  }
}

export default BadgerTestimonialsSlice;
