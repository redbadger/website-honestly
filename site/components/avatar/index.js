// @flow
import React from 'react';

import styles from './style.css';

type AvatarProps = {
  image: string,
  name: string,
  size?: number,
};

const Avatar = ({ image, name, size }: AvatarProps) => {
  const style = {
    width: size,
    height: size,
    minWidth: size,
    minHeight: size,
  };
  return (
    <div className={styles.avatar__container} style={style}>
      <img src={image} alt={name} />
    </div>
  );
};

export default Avatar;
