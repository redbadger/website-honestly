// @flow
import React from 'react';

import Social from '../social';
import type { SocialProps } from '../social';

import styles from './style.css';

type CaseStudyHeaderProps = {
  title: string,
  headerImage: string,
  headerImageAlt: string,
  headerColor: string,
  children: Node,
  social: SocialProps,
};

const CaseStudyHeader = ({
  title,
  headerImage,
  headerImageAlt,
  headerColor,
  headerImageAlign,
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
      </div>
      {children}
    </div>
  </div>;

export default CaseStudyHeader;
