import React from 'react';
import InlineSVG from 'svg-inline-react';
import styles from './style.css';
import Link from '../../../../components/link';

import fortnumImage from './images/fortnumImage.jpg';
import financialTimesImage from './images/financialTimesImage.png';
import camdenMarketImage from './images/camdenMarketImage.jpg';
import arrowSVG from '../../../../../assets/images/SVG/arrow.svg';

const caseStudies = [
  {
    name: 'fortnum-and-mason',
    url: '/our-work/case-study/fortnum-and-mason/',
    image: {
      src: fortnumImage,
      caption: 'Fortnum & Mason',
    },
    title: 'Elegant e-commerce in eight months',
  },
  {
    name: 'financial-times',
    url: '/our-work/case-study/financial-times/',
    image: {
      src: financialTimesImage,
      caption: 'Financial Times',
    },
    title: 'Lasting change for a media giant',
  },
  {
    name: 'camden-market',
    url: '/our-work/case-study/camden-market/',
    image: {
      src: camdenMarketImage,
      caption: 'Camden Market',
    },
    title: 'Taking steps towards a digital future',
  },
  {
    name: 'camden-market',
    url: '/our-work/case-study/camden-market/',
    image: {
      src: camdenMarketImage,
      caption: 'Camden Market',
    },
    title: 'Taking steps towards a digital future',
  },
  {
    name: 'retailer',
    url: '/our-work/case-study/retailer/',
    image: {
      src: camdenMarketImage,
      caption: 'Retailer',
    },
    title: 'RANDOM RETAILER TITLE',
  },
];

/**
 * Fisher-yates shuffle
 * https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
 */
const shuffle = array => {
  const res = array.slice();
  let counter = res.length;
  while (counter > 0) {
    const index = Math.floor(Math.random() * counter);
    counter -= 1;

    const temp = res[counter];
    res[counter] = res[index];
    res[index] = temp;
  }
  return res;
};

const WhatToReadNext = () => {
  const path = window.location.pathname.replace(/\/+$/g, '').split('/');
  const currentStudyName = path[path.length - 1];
  const displayedStudies = shuffle(caseStudies).filter(s => s.name !== currentStudyName);

  return (
    <div className={styles.whatNext}>
      <div className={styles.whatNext__tilesContainer}>
        {displayedStudies.map((study, index) =>
          <div key={`whatNext__tile__${index}`} className={styles.whatNext__tile}>
            <figure>
              <a href={study.url}>
                <img
                  src={study.image.src}
                  alt={study.image.caption}
                  className={styles.whatNext__image}
                />
              </a>
              <figcaption className={styles.whatNext__caption}>{study.image.caption}</figcaption>
            </figure>
            <a href={study.url} className={styles.whatNext__link}>
              <h2 className={styles.whatNext__title}>
                {study.title}
                <InlineSVG src={arrowSVG} className={styles.whatNext__arrow} />
              </h2>
            </a>
          </div>,
        )}
      </div>
      <Link to="ourWorkPage" className={styles.whatNext__button}>
        See more of our work
      </Link>
    </div>
  );
};

export default WhatToReadNext;
