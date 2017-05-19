import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import styles from './style.css';
import Image2010 from '../2010/2010.png';
import Image2011 from '../2011/2011.png';
import Image2012 from '../2012/2012.png';
import Image2013 from '../2013/2013.png';
import Image2014 from '../2014/2014.png';
import Image2015 from '../2015/2015.png';
import Image2016 from '../2016/2016.png';

const MobileImage = ({ index, onChangeIndex }) => {
  return (
    <div className={styles.mobileImage}>
      <SwipeableViews index={index} onChangeIndex={onChangeIndex}>
        <div className={styles.mobileImageWrapper}>
          <img src={Image2010} alt="2010" className={styles.image} />
        </div>
        <div className={styles.mobileImageWrapper}>
          <img src={Image2011} alt="2011" className={styles.image} />
        </div>
        <div className={styles.mobileImageWrapper}>
          <img src={Image2012} alt="2012" className={styles.image} />
        </div>
        <div className={styles.mobileImageWrapper}>
          <img src={Image2013} alt="2013" className={styles.image} />
        </div>
        <div className={styles.mobileImageWrapper}>
          <img src={Image2014} alt="2014" className={styles.image} />
        </div>
        <div className={styles.mobileImageWrapper}>
          <img src={Image2015} alt="2015" className={styles.image} />
        </div>
        <div className={styles.mobileImageWrapper}>
          <img src={Image2016} alt="2016" className={styles.image} />
        </div>
      </SwipeableViews>
    </div>
  );
};


MobileImage.propTypes = {
  index: React.PropTypes.number.isRequired,
  onChangeIndex: React.PropTypes.func.isRequired,
};

export default MobileImage;
