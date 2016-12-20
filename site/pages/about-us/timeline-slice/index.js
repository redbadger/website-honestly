import React from 'react';
import SwipeableViews from 'react-swipeable-views';

import styles from './style.css';
import Navigator from './navigator';
import Zero from './2010';
import One from './2011';
import Two from './2012';
import Three from './2013';
import Four from './2014';
import Five from './2015';
import Six from './2016';
import ImageMobile from './mobileImage';

class TimelineSlice extends React.Component {

  componentWillMount() {
    this.state = {
      currentIndex: 6,
    };
  }

  setPage = idx => {
    this.setState({ currentIndex: idx });
  }

  render() {
    const { currentIndex } = this.state;
    return (
      <div className={styles.timeline}>
        <ImageMobile index={currentIndex} onChangeIndex={this.setPage} />
        <Navigator currentIndex={currentIndex} onClick={this.setPage} />
        <div className={styles.content}>
          <SwipeableViews index={currentIndex} onChangeIndex={this.setPage}>
            <Zero />
            <One />
            <Two />
            <Three />
            <Four />
            <Five />
            <Six />
          </SwipeableViews>
        </div>
      </div>
    );
  }
}

export default TimelineSlice;
