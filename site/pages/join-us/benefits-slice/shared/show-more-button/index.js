// @flow
import React from 'react';
import styles from './style.css';

type ShowMoreButtonProps = {
  open: boolean,
  ariaLabel: string,
};

const ShowMoreButton = ({ open, ariaLabel }: ShowMoreButtonProps) => {
  return (
    <button
      type="button"
      aria-expanded={open}
      aria-label={ariaLabel}
      className={styles.button__more}
    >
      <span className={open ? styles.button__arrowDown : styles.button__arrow} />
    </button>
  );
};

export default ShowMoreButton;
