// @flow
import React from 'react';

import styles from './style.css';
import Image from '../../components/image';

import glassesImage from './images/glasses.jpg';
import glassesX2Image from './images/glassesX2.jpg';
import glassesX3Image from './images/glassesX3.jpg';

type Props = {
  linkUrl: string,
};

export default function TechLabSlice({ linkUrl }: Props) {
  return (
    <section className={styles.techLabSlice}>
      <h2 className={[styles.heading, styles.heading__mobile].join(' ')}>
        TechLab_Report<sup>19</sup>
      </h2>
      <Image
        alt="laboratory safety glasses"
        className={styles.techLabImage}
        src={glassesImage}
        src2x={glassesX2Image}
        src3x={glassesX3Image}
      />
      <div className={styles.headingContainer}>
        <h2 className={[styles.heading, styles.heading__desktop].join(' ')}>
          TechLab_Report<sup>19</sup>
          <br />– our view on what matters in tech
        </h2>
        <p>Our view on what matters in tech</p>
        <a className={styles.exploreBtn} href={linkUrl}>
          Explore the report
        </a>
      </div>
    </section>
  );
}
