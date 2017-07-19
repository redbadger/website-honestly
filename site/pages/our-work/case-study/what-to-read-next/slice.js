// @flow
import React from 'react';
import InlineSVG from 'svg-inline-react';

import styles from './style.css';
import arrowSVG from '../../../../../assets/images/SVG/arrow.svg';

type WhatToReadNextSliceProps = {
  details: Object,
};

const WhatToReadNextSlice = ({ details }: WhatToReadNextSliceProps) => {
  return (
    <div key={details.name} className={styles.whatNext__tile}>
      <figure>
        <a href={details.link}>
          <img src={details.image} alt={details.name} className={styles.whatNext__image} />
        </a>
        <figcaption className={styles.whatNext__caption}>{details.name}</figcaption>
      </figure>
      <a href={details.link} className={styles.whatNext__link}>
        <h2 className={styles.whatNext__title}>
          {details.tagline}
          <InlineSVG src={arrowSVG} className={styles.whatNext__arrow} />
        </h2>
      </a>
    </div>
  );
};

export default WhatToReadNextSlice;
