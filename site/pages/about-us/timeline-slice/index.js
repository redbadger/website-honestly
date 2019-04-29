// @flow

import React, { useState } from 'react';
import SwipeableViews from 'react-swipeable-views';

import styles from './style.css';
import Navigator from '../../../components/navigator';
import Zero from './2010';
import One from './2011';
import Two from './2012';
import Three from './2013';
import Four from './2014';
import Five from './2015';
import Six from './2016';
import Seven from './2017';
import Eight from './2018';
import ImageMobile from './mobileImage';

import Image2010 from './2010/2010.png';
import Image2011 from './2011/2011.png';
import Image2012 from './2012/2012.png';
import Image2013 from './2013/2013.png';
import Image2014 from './2014/2014.png';
import Image2015 from './2015/2015.png';
import Image2016 from './2016/2016.png';
import Image2017 from './2017/2017.png';
import Image2018 from './2018/2018.png';
import ClientOnly from '../../../components/clientOnly';

const years = [
  { Component: Zero, image: Image2010 },
  { Component: One, image: Image2011 },
  { Component: Two, image: Image2012 },
  { Component: Three, image: Image2013 },
  { Component: Four, image: Image2014 },
  { Component: Five, image: Image2015 },
  { Component: Six, image: Image2016 },
  { Component: Seven, image: Image2017 },
  { Component: Eight, image: Image2018 },
].map((data, index) => ({ year: 2010 + index, ...data }));

const TimelineSlice = () => {
  const [currentIndex, setPage] = useState(0);

  return (
    <div className={styles.timeline}>
      <div className={styles.container}>
        <ClientOnly>
          <ImageMobile years={years} index={currentIndex} onChangeIndex={setPage} />
          <div className={styles.content}>
            <Navigator currentIndex={currentIndex} onChange={setPage} maxIndex={years.length - 1} />
            <SwipeableViews index={currentIndex} onChangeIndex={setPage}>
              {years.map(({ year, Component }) => (
                <Component key={year} />
              ))}
            </SwipeableViews>
          </div>
        </ClientOnly>

        <noscript>
          <div className={styles.content}>
            {years.map(({ Component, year, image }) => (
              <React.Fragment key={year}>
                <div className={styles.imageWrapper}>
                  <img src={image} alt="" className={styles.image} />
                </div>
                <Component />
              </React.Fragment>
            ))}
          </div>
        </noscript>
      </div>
    </div>
  );
};

export default TimelineSlice;
