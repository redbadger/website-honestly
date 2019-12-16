// @flow
import React from 'react';
import styles from './style.css';
import ShowMoreIcon from '../../../../components/show-more-button';
import BurgerMenuIcon from '../../../../components/burger-menu';

export type TimeframeProps = {
  title: string,
  indexId: string,
  open: boolean,
  handleClick: Function,
  bugerMenu: boolean,
};

const Timeframe = ({ title, indexId, open, handleClick, burgerMenu }: TimeframeProps) => {
  /* eslint-disable react/no-danger */
  /* eslint-disable jsx-a11y/no-static-element-interactions */
  return (
    <li className={styles.timeframeListItem}>
      <div className={styles.dropdownButtonContainer}>
        <button
          type="button"
          aria-label={`toggle ${title} dropdown`}
          onClick={() => {
            handleClick(indexId);
          }}
          className={`${styles.dropdownButton} ${
            open ? styles.dropdownButtonOpen : styles.dropdownButtonClosed
          }`}
        >
          <h4 className={open ? styles.h4Open : ''}>{title.toUpperCase()}</h4>
          {(burgerMenu && <BurgerMenuIcon bars={2} cssModifier={styles.timeframeButton} />) || (
            <ShowMoreIcon
              open={open}
              cssModifier={`${styles.timeframeButton} ${
                open ? styles.timeframeButtonOpen : styles.timeframeButtonClosed
              }`}
            />
          )}
        </button>
      </div>
    </li>
  );
};

export default Timeframe;
