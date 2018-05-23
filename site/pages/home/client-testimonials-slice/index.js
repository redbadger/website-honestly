import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import styles from './style.css';
import ClientOnly from '../../../components/clientOnly';
import Navigator from './navigator';
import One from './1';
import Two from './2';
import Three from './3';
import Four from './4';
import Five from './5';

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
                <One />
                <Two />
                <Three />
                <Four />
                <Five />
              </SwipeableViews>
            </div>
          </ClientOnly>
        </div>
      </div>
    );
  }
}

export default ClientTestimonialsSlice;
