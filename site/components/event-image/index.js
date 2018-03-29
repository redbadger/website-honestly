// @flow
// Displays event related image with link

import React from 'react';
import styles from './style.css';

type EventImageProps = {
  imgPath: string,
  imgAlt: string,
};

export default function EventImage({ imgPath, imgAlt }: EventImageProps) {
  return (
    <div className={styles.imgBorder}>
      <div className={styles.imgWrapper}>
        <img className={styles.eventPicture} src={imgPath} alt={imgAlt} />
      </div>
    </div>
  );
}
