// @flow
import React from 'react';
import styles from './style.css';

type ShowMoreIconProps = {
  open: boolean,
  cssModifier?: string,
};

const ShowMoreIcon = ({ open, cssModifier }: ShowMoreIconProps) => {
  return (
    <div className={`${styles.button__more} ${cssModifier}`}>
      <span className={open ? styles.button__arrowDown : styles.button__arrow} />
    </div>
  );
};

export default ShowMoreIcon;
