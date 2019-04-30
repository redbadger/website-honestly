// @flow
import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import styles from './style.css';

type MobileImageProps = {
  years: $ReadOnlyArray<{ image: string, year: number, ... }>,
  index: number,
  onChangeIndex: Function,
};

const MobileImage = ({ years, index, onChangeIndex }: MobileImageProps) => {
  return (
    <div className={styles.mobileImage}>
      <SwipeableViews index={index} onChangeIndex={onChangeIndex}>
        {years.map(({ year, image }) => (
          <div key={year} className={styles.mobileImageWrapper}>
            <img src={image} alt="" className={styles.image} />
          </div>
        ))}
      </SwipeableViews>
    </div>
  );
};

export default MobileImage;
