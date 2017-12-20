// @flow
import _ from 'lodash';
import React from 'react';

import styles from './style.css';
import Link from '../../../../components/link';
import WhatToReadNextSlice from './slice';
import sliceData from './data';

type WhatToReadNextProps = {
  currentPage?: string,
  maxNumberSlices?: number,
  linkKeys?: Array<string>,
};

function specificLinks(linkKeys) {
  return linkKeys.map(key => sliceData[key]);
}

function randomLinks(currentPage, linkKeys) {
  return _(sliceData)
    .reject((slice, key) => linkKeys.includes(key) || key === currentPage)
    .shuffle()
    .value();
}

function readNextSlices(currentPage, maxNumberSlices, linkKeys) {
  const combinedSlices = specificLinks(linkKeys).concat(randomLinks(currentPage, linkKeys));

  return _(combinedSlices)
    .take(maxNumberSlices)
    .value();
}

const WhatToReadNext = ({
  currentPage = '',
  maxNumberSlices = 3,
  linkKeys = [],
}: WhatToReadNextProps) => {
  const nextSlices = readNextSlices(currentPage, maxNumberSlices, linkKeys);
  return (
    <div className={styles.whatNext}>
      <div className={styles.whatNext__tilesContainer}>
        {nextSlices.map((slice, index) => (
          <WhatToReadNextSlice
            key={index}
            name={slice.name}
            tagline={slice.tagline}
            image={slice.image}
            link={slice.link}
          />
        ))}
      </div>
      <Link to="ourWorkPage" className={styles.whatNext__button}>
        See more of our work
      </Link>
    </div>
  );
};

export default WhatToReadNext;
