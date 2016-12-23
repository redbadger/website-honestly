import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import styles from './style.css';
import Mobile2010 from '../2010/2010-mobile.jpg';
import Mobile2011 from '../2011/2011-mobile.jpg';
import Mobile2012 from '../2012/2012-mobile.jpg';
import Mobile2013 from '../2013/2013-mobile.jpg';
import Mobile2014 from '../2014/2014-mobile.jpg';
import Mobile2015 from '../2015/2015-mobile.jpg';
import Mobile2016 from '../2016/2016-mobile.jpg';

const MobileImage = ({ index, onChangeIndex }) => {
  return (
    <div className={styles.mobileImage}>
      <SwipeableViews index={index} onChangeIndex={onChangeIndex}>
        <img src={Mobile2010} alt="2010" className={styles.image} />
        <img src={Mobile2011} alt="2011" className={styles.image} />
        <img src={Mobile2012} alt="2012" className={styles.image} />
        <img src={Mobile2013} alt="2013" className={styles.image} />
        <img src={Mobile2014} alt="2014" className={styles.image} />
        <img src={Mobile2015} alt="2015" className={styles.image} />
        <img src={Mobile2016} alt="2016" className={styles.image} />
      </SwipeableViews>
    </div>
  );
};


MobileImage.propTypes = {
  index: React.PropTypes.number.isRequired,
  onChangeIndex: React.PropTypes.func.isRequired,
};

export default MobileImage;
