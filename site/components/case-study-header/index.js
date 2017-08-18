// @flow
import React from 'react';

import Social from '../social';
import type { SocialProps } from '../social';

import styles from './style.css';

type CaseStudyHeaderProps = {
  title: string,
  tagline?: string,
  headerImage: string,
  headerImageAlt: string,
  headerColor: string,
  children?: Node,
  social: SocialProps,
};

const CaseStudyHeader = ({
  title,
  tagline,
  headerImage,
  headerImageAlt,
  headerColor,
  children,
  social,
}: CaseStudyHeaderProps) =>
  <div>
    <Social {...social} />
    <div className={styles.header} style={{ backgroundColor: headerColor }}>
      <div className={styles.header__container}>
        <div className={styles.header__imageContainer}>
          <img src={headerImage} alt={headerImageAlt} className={styles.header__image} />
        </div>
      </div>
    </div>
    <div className={styles.content}>
      <div className={styles.content__wrapper}>
        <h1 className={styles.content__mainTitle}>
          {title}
        </h1>
        <h2 className={styles.content__tagline}>
          {tagline}
        </h2>
      </div>
      {children}
    </div>
  </div>;

export default CaseStudyHeader;
