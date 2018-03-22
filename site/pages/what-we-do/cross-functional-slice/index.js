// @flow
import React from 'react';
import styles from './styles.css';
import ColourBox from '../../../components/colour-box';
import Image from '../../../components/image';

import bigParty1x from './png/big-party.png';
import bigParty2x from './png/big-party@2x.png';
import bigParty3x from './png/big-party@3x.png';
import crossFunctionalBadgers from './jpg/cross-functional-badgers.jpg';

const content = [
  {
    title: 'Lean Agile',
    labelColour: 'blue',
    description: 'Drive efficiency and reduce risk through our lean methods.',
  },
  {
    title: 'Tech',
    labelColour: 'green',
    link: 'technology',
    description: 'Transform your business by being bold with tech.',
  },
  {
    title: 'Design',
    labelColour: 'yellow',
    description: 'Improve customer experience, create delightful products and services.',
  },
  {
    title: 'You',
    labelColour: 'red',
    description: 'Together we build a capability for lasting change.',
  },
];

const CrossFunctionalSlice = () => (
  <section className={styles.crossFunctionalSlice}>
    <div className={styles.photoContainer}>
      <Image
        src={crossFunctionalBadgers}
        alt="a photo showing Red Badger employees working in a cross functional team"
        className={styles.image}
      />
    </div>
    <div className={styles.sliceBody}>
      <section className={styles.outerHeadingContainer}>
        <div className={styles.headingContainer}>
          <h2 className={styles.heading}>Working in cross functional teams</h2>
        </div>
      </section>
      <section className={styles.mainContainer}>
        <div className={styles.imageContainer}>
          <Image
            src={bigParty1x}
            src2x={bigParty2x}
            src3x={bigParty3x}
            role="presentation"
            className={styles.image}
          />
        </div>
        <div className={styles.colourBoxContainer}>
          {content.map(item => (
            <div key={item.title} className={styles.boxWrapper}>
              <ColourBox {...item} />
            </div>
          ))}
        </div>
      </section>
    </div>
  </section>
);

export default CrossFunctionalSlice;
