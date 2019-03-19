// @flow
import React from 'react';

import styles from './style.css';
import Link from '../../../../../components/link';
import Arrow from '../../../../../icons/arrow';

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
          <span className={styles.whatNext__arrow_wrapper}>
            <Arrow className={styles.whatNext__arrow} />
          </span>
        </h2>
      </Link>
    </div>
  );
};

export default WhatToReadNextSlice;
