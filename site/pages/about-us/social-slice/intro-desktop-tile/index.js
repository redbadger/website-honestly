// @flow

import React from 'react';
import InlineSVG from 'svg-inline-react';
import styles from './styles.css';
import previousArrowIcon from '../icons/arrow/arrowPrevious.svg';
import nextArrowIcon from '../icons/arrow/arrow.svg';
import ClientOnly from '../../../../components/clientOnly';

type IntroProps = {
  prevCard: Function,
  nextCard: Function,
  currentTile: number,
  totalSwipableTiles: number,
};

const IntroDesktopCard = ({ prevCard, nextCard, currentTile, totalSwipableTiles }: IntroProps) => {
  const preButtonEnabled = currentTile === 0;
  const nextButtonEnabled = currentTile + 1 > totalSwipableTiles;

  return (
    <div className={styles.intro}>
      <div className={styles.text}>
        From our social feed
      </div>
      <ClientOnly>
        <div className={styles.buttons}>
          <button
            title="Previous"
            aria-label="Previous"
            disabled={preButtonEnabled}
            onClick={prevCard}
            className={styles.prevButton}
          >
            <InlineSVG src={previousArrowIcon} className={styles.prevArrow} />
          </button>
          <button
            title="Next"
            aria-label="Next"
            disabled={nextButtonEnabled}
            onClick={nextCard}
            className={styles.nextButton}
          >
            <InlineSVG src={nextArrowIcon} className={styles.nextArrow} />
          </button>
        </div>
      </ClientOnly>
    </div>
  );
};

export default IntroDesktopCard;
