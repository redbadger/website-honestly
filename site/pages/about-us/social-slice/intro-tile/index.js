// @flow

import React from 'react';
import InlineSVG from 'svg-inline-react';
import styles from './styles.css';
import arrowIconSVG from '../icons/arrow/arrow.svg';

type IntroProps = {
  prevCard: Function,
  nextCard: Function,
}

const IntroCard = ({ prevCard, nextCard }: IntroProps) => (
  <li className={styles.intro}>
    <span>
      From our social feed
      <button onClick={prevCard} className={styles.prevButton}><InlineSVG src={arrowIconSVG} className={styles.prevArrow} /></button>
      <button onClick={nextCard} className={styles.nextButton}><InlineSVG src={arrowIconSVG} className={styles.nextArrow} /></button>
    </span>
  </li>
);

export default IntroCard;
