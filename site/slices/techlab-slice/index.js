// @flow
import React from 'react';

import styles from './style.css';
import Image from '../../components/image';

import glassesX2Image from './images/glassesX2.jpg';
import glassesX3Image from './images/glassesX3.jpg';

type Props = {
  linkUrl: string,
};

export default function TechLabSlice({ linkUrl }: Props) {
  return (
    <section className={styles.techLabSlice}>
      <Image
        alt="laboratory safety glasses"
        className={styles.techLabImage}
        src={glassesX2Image}
        src2x={glassesX2Image}
        src3x={glassesX3Image}
      />
      <div className={styles.headingContainer}>
        <h2 className={styles.heading}>
          TechLab_Report<sup>19</sup>
          <p>– our view on what matters in tech</p>
        </h2>
      </div>
      <a className={styles.exploreBtn} href={linkUrl}>
        Explore the report
      </a>
    </section>
  );
}
