import React from 'react';
import classnames from 'classnames/bind';
import InlineSVG from 'svg-inline-react';
import styles from './style.css';

import fortnumImage from './images/fortnumImage.jpg';
import financialTimesImage from './images/financialTimesImage.png';
import camdenMarketImage from './images/camdenMarketImage.jpg';
import arrowSVG from '../../../../../assets/images/SVG/arrow.svg';

const cx = classnames.bind(styles);
const WhatToReadNext = () => (
  <div className={styles.whatNext}>
    <div className={styles.whatNext__tilesContainer}>
      <div className={cx('whatNext__tile', 'whatNext__tile--fortnum')}>
        <figure>
          <img src={fortnumImage} alt="Fortnum & Mason" className={styles.whatNext__image} />
          <figcaption className={styles.whatNext__caption}>Fortnum &amp; Mason</figcaption>
        </figure>
        <h2 className={styles.whatNext__title}>
          Elegant e-commerce in eight months
          <InlineSVG src={arrowSVG} className={styles.whatNext__arrow} />
        </h2>
      </div>
      <div className={cx('whatNext__tile', 'whatNext__tile--financialTimes')}>
        <figure>
          <img src={financialTimesImage} alt="Financial Times" className={styles.whatNext__image} />
          <figcaption className={styles.whatNext__caption}>Financial Times</figcaption>
        </figure>
        <h2 className={styles.whatNext__title}>
          Lasting change for a media giant
          <InlineSVG src={arrowSVG} className={styles.whatNext__arrow} />
        </h2>
      </div>
      <div className={cx('whatNext__tile', 'whatNext__tile--camden')}>
        <figure>
          <img src={camdenMarketImage} alt="Camden Market" className={styles.whatNext__image} />
          <figcaption className={styles.whatNext__caption}>Camden Market</figcaption>
        </figure>
        <h2 className={styles.whatNext__title}>
          Taking steps towards a digital future
          <InlineSVG src={arrowSVG} className={styles.whatNext__arrow} />
        </h2>
      </div>
    </div>
    <button className={styles.whatNext__button}>
      See more of our work
    </button>
  </div>
);

export default WhatToReadNext;
