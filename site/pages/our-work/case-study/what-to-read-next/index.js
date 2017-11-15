// @flow
import _ from 'lodash';
import React from 'react';

import styles from './style.css';
import Link from '../../../../components/link';
import WhatToReadNextSlice from './slice';

import fortnumImage from './images/fortnumReadMore.jpg';
import financialTimesImage from './images/financialTimesReadMore.jpg';
import camdenMarketImage from './images/camdenMarketReadMore.jpg';
import retailerImage from './images/retailerReadMore.jpg';
import skyCmsImage from './images/skyCmsReadMore.jpg';

const slices = {
  fortnumAndMason: {
    name: 'Fortnum & Mason',
    tagline: 'Elegant e-commerce in eight months',
    image: fortnumImage,
    link: '/our-work/case-study/fortnum-and-mason/',
  },
  financialTimes: {
    name: 'Financial Times',
    tagline: 'Lasting change for a media giant',
    image: financialTimesImage,
    link: '/our-work/case-study/financial-times/',
  },
  camdenMarket: {
    name: 'Camden Market',
    tagline: 'Taking steps towards a digital future',
    image: camdenMarketImage,
    link: '/our-work/case-study/camden-market/',
  },
  retailer: {
    name: 'Retailer',
    tagline: 'Next generation platform for retail giant',
    image: retailerImage,
    link: '/our-work/case-study/retailer/',
  },
  skyCms: {
    name: 'Sky CMS',
    tagline: 'A new CMS just for Sky',
    image: skyCmsImage,
    link: '/our-work/case-study/sky-cms/',
  },
};

type WhatToReadNextProps = {
  currentPage?: string,
  maxNumberSlices?: number,
};

const WhatToReadNext = ({ currentPage = '', maxNumberSlices = 3 }: WhatToReadNextProps) => (
  <div className={styles.whatNext}>
    <div className={styles.whatNext__tilesContainer}>
      {_(slices)
        .reject((slice, key) => key === currentPage)
        .shuffle()
        .take(maxNumberSlices)
        .map((details, key) => <WhatToReadNextSlice key={key} details={details} />)
        .value()}
    </div>
    <Link to="ourWorkPage" className={styles.whatNext__button}>
      See more of our work
    </Link>
  </div>
);

export default WhatToReadNext;
