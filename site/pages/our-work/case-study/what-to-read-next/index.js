import React from 'react';
import InlineSVG from 'svg-inline-react';
import styles from './style.css';

import fortnumImage from './images/fortnumImage.jpg';
import arrowSVG from '../../../../../assets/images/SVG/arrow.svg';

const WhatToReadNext = () => (
  <div className={styles.whatNext}>
    <figure>
      <img src={fortnumImage} alt="Fortnum & Mason" className={styles.whatNext__image} />
      <figcaption className={styles.whatNext__caption}>Fortnum &amp; Mason</figcaption>
    </figure>
    <h2 className={styles.whatNext__title}>
      Elegant e-commerce in eight months
      <InlineSVG src={arrowSVG} className={styles.whatNext__arrow} />
    </h2>
    <button className={styles.whatNext__button}>
      See more of our work
    </button>
  </div>
);

export default WhatToReadNext;
