// @flow

import React from 'react';
import styles from './styles.css';
import ClientOnly from '../../../../components/clientOnly';
import ArrowLight from '../../../../components/icons/arrow-light';

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
      <div className={styles.text}>From our social feed</div>
      <ClientOnly>
        <div className={styles.buttons}>
          <button
            title="Previous"
            aria-label="Previous"
            disabled={preButtonEnabled}
            onClick={prevCard}
            className={styles.prevButton}
          >
            <ArrowLight reverse className={styles.prevArrow} />
          </button>
          <button
            title="Next"
            aria-label="Next"
            disabled={nextButtonEnabled}
            onClick={nextCard}
            className={styles.nextButton}
          >
            <ArrowLight className={styles.nextArrow} />
          </button>
        </div>
      </ClientOnly>
    </div>
  );
};

export default IntroDesktopCard;
