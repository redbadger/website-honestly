// @flow
import React from 'react';
import styles from './style.css';

type FramedImageProps = {
  photo: string,
  illustration: string,
  frame: string,
  name: string,
  altText: string,
  position: number,
  onClick: Function,
  isWide?: boolean,
};

const FramedImage = ({
  photo,
  illustration,
  frame,
  name,
  isWide,
  altText,
  onClick,
  position,
}: FramedImageProps) => (
  <div className={[styles[`${name}PhotoWrapper`], styles.hoverHandler].join(' ')}>
    <button onClick={onClick(position)}>
      <div className={styles[`${name}PhotoMask`]}>
        <div className={styles.illustrationWrapper}>
          <img
            className={isWide ? styles.illustrationWide : styles.illustration}
            src={illustration}
            alt={altText}
          />
        </div>
        <div className={styles.photoWrapper}>
          <img className={isWide ? styles.photoWide : styles.photo} src={photo} alt={altText} />
        </div>
      </div>
      <img className={styles[`${name}Frame`]} src={frame} alt="" />
    </button>
  </div>
);

export default FramedImage;
