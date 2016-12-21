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

import Mobile2010 from './2010/2010-mobile.jpg';
import Mobile2011 from './2011/2011-mobile.jpg';
import Mobile2012 from './2012/2012-mobile.jpg';
import Mobile2013 from './2013/2013-mobile.jpg';
import Mobile2014 from './2014/2014-mobile.jpg';
import Mobile2015 from './2015/2015-mobile.jpg';
import Mobile2016 from './2016/2016-mobile.jpg';
import ClientOnly from '../../../components/clientOnly';

class TimelineSlice extends React.Component {

  componentWillMount() {
    this.state = {
      currentIndex: 6,
    };
  }

  componentDidMount() {
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
            <img src={Mobile2010} alt="2010" className={styles.image} />
            <Zero />
            <img src={Mobile2011} alt="2011" className={styles.image} />
            <One />
            <img src={Mobile2012} alt="2012" className={styles.image} />
            <Two />
            <img src={Mobile2013} alt="2013" className={styles.image} />
            <Three />
            <img src={Mobile2014} alt="2014" className={styles.image} />
            <Four />
            <img src={Mobile2015} alt="2015" className={styles.image} />
            <Five />
            <img src={Mobile2016} alt="2016" className={styles.image} />
            <Six />
          </div>
        </noscript>

      </div >
    );
  }
}

export default TimelineSlice;
