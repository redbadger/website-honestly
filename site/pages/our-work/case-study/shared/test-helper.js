// @no-flow
import React from 'react';

import styles from './what-to-read-next/style.css';
import Link from '../../../../components/link';
import WhatToReadNextSlice from './what-to-read-next/slice';

const MockedWhatToReadNext = () => {
  const nextSlices = [
    {
      name: 'Pride in London',
      tagline: 'Delivering a best-in-class digital experience',
      image: 'pride.gif',
      linkKey: 'prideCaseStudy',
    },
    {
      name: 'Financial Times',
      tagline: 'Lasting change for a media giant',
      image: 'financialTimesReadMore.jpg',
      linkKey: 'financialTimesCaseStudy',
    },
    {
      name: 'Car Trawler',
      tagline: 'Creating complete CMS control for travel brands',
      image: 'carTrawler.jpg',
      linkKey: 'carTrawlerCaseStudy',
    },
  ];
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

export default MockedWhatToReadNext;
