// @flow
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

import Image2010 from './2010/2010.png';
import Image2011 from './2011/2011.png';
import Image2012 from './2012/2012.png';
import Image2013 from './2013/2013.png';
import Image2014 from './2014/2014.png';
import Image2015 from './2015/2015.png';
import Image2016 from './2016/2016.png';
import ClientOnly from '../../../components/clientOnly';

class TimelineSlice extends React.Component {
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
      <div className={styles.timeline}>
        <div className={styles.container}>
          <ClientOnly>
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
          </ClientOnly>

          <noscript>
            <div className={styles.content}>
              <div className={styles.imageWrapper}>
                <img src={Image2010} alt="2010" className={styles.image} />
              </div>
              <Zero />
              <div className={styles.imageWrapper}>
                <img src={Image2011} alt="2011" className={styles.image} />
              </div>
              <One />
              <div className={styles.imageWrapper}>
                <img src={Image2012} alt="2012" className={styles.image} />
              </div>
              <Two />
              <div className={styles.imageWrapper}>
                <img src={Image2013} alt="2013" className={styles.image} />
              </div>
              <Three />
              <div className={styles.imageWrapper}>
                <img src={Image2014} alt="2014" className={styles.image} />
              </div>
              <Four />
              <div className={styles.imageWrapper}>
                <img src={Image2015} alt="2015" className={styles.image} />
              </div>
              <Five />
              <div className={styles.imageWrapper}>
                <img src={Image2016} alt="2016" className={styles.image} />
              </div>
              <Six />
            </div>
          </noscript>
        </div>
      </div>
    );
  }
}

export default TimelineSlice;
