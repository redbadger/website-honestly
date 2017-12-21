// @flow
import React from 'react';
import InlineSVG from 'svg-inline-react';

import styles from './style.css';
import arrowSVG from '../../../../../assets/images/SVG/arrow.svg';
import Link from '../../../../components/link';

type WhatToReadNextSliceProps = {
  name: string,
  tagline: string,
  image: string,
  linkKey: string,
};

const WhatToReadNextSlice = ({ name, tagline, image, linkKey }: WhatToReadNextSliceProps) => {
  return (
    <div className={styles.whatNext__tile}>
      <figure>
        <Link to={linkKey}>
          <img src={image} alt={name} className={styles.whatNext__image} />
        </Link>
        <figcaption className={styles.whatNext__caption}>{name}</figcaption>
      </figure>
      <Link to={linkKey} className={styles.whatNext__link}>
        <h2 className={styles.whatNext__title}>
          {tagline}
          <InlineSVG src={arrowSVG} className={styles.whatNext__arrow} />
        </h2>
      </Link>
    </div>
  );
};

export default WhatToReadNextSlice;
