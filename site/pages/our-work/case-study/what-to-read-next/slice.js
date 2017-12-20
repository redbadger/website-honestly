// @flow
import React from 'react';
import InlineSVG from 'svg-inline-react';

import styles from './style.css';
import arrowSVG from '../../../../../assets/images/SVG/arrow.svg';

type WhatToReadNextSliceProps = {
  name: string,
  tagline: string,
  image: string,
  link?: string,
};

const WhatToReadNextSlice = ({ name, tagline, image, link = '' }: WhatToReadNextSliceProps) => {
  return (
    <div key={name} className={styles.whatNext__tile}>
      <figure>
        <a href={link}>
          <img src={image} alt={name} className={styles.whatNext__image} />
        </a>
        <figcaption className={styles.whatNext__caption}>{name}</figcaption>
      </figure>
      <a href={link} className={styles.whatNext__link}>
        <h2 className={styles.whatNext__title}>
          {tagline}
          <InlineSVG src={arrowSVG} className={styles.whatNext__arrow} />
        </h2>
      </a>
    </div>
  );
};

export default WhatToReadNextSlice;
