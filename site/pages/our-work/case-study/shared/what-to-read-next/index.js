// @flow
import shuffle from 'lodash.shuffle';
import take from 'lodash.take';
import React from 'react';

import styles from './style.css';
import Link from '../../../../../components/link';
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
  const validSlices = Object.keys(sliceData)
    .filter(key => !linkKeys.includes(key) && key !== currentPage)
    .map(key => sliceData[key]);

  return shuffle(validSlices);
}

function readNextSlices(currentPage, maxNumberSlices, linkKeys) {
  const combinedSlices = specificLinks(linkKeys).concat(randomLinks(currentPage, linkKeys));

  return take(combinedSlices, maxNumberSlices);
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
          /* disabled because list is static */
          /* eslint-disable react/no-array-index-key */
          <WhatToReadNextSlice
            key={`${slice.name}-${index}`}
            name={slice.name}
            tagline={slice.tagline}
            image={slice.image}
            linkKey={slice.linkKey}
          />
          /* eslint-enable react/no-array-index-key */
        ))}
      </div>
      <Link to="ourWorkPage" className={styles.whatNext__button}>
        See more of our work
      </Link>
    </div>
  );
};

export default WhatToReadNext;
