// @flow

import React from 'react';
import InlineSVG from 'svg-inline-react';
import styles from './styles.css';
import previousArrowIcon from '../icons/arrow/arrowPrevious.svg';
import nextArrowIcon from '../icons/arrow/arrow.svg';

type IntroProps = {
  prevCard: Function,
  nextCard: Function,
}

const IntroDesktopCard = ({ prevCard, nextCard }: IntroProps) => (
  <div className={styles.intro}>
    <div className={styles.text}>
      From our social feed
      </div>
    <div className={styles.buttons}>
      <button onClick={prevCard} className={styles.prevButton}><InlineSVG src={previousArrowIcon} className={styles.prevArrow} /></button>
      <button onClick={nextCard} className={styles.nextButton}><InlineSVG src={nextArrowIcon} className={styles.nextArrow} /></button>
    </div>

  </div>
);

export default IntroDesktopCard;
