// @flow
import React from 'react';
import classnames from 'classnames/bind';

import Social from '../social';
import type { SocialProps } from '../social';

import styles from './style.css';

const cx = classnames.bind(styles);

type CaseStudyHeaderProps = {
  title: string,
  tagline?: string,
  headerClassName?: string,
  headerImage: string,
  headerImageAlt: string,
  headerImageAlign?: string,
  headerColor: string,
  children?: Node,
  social: SocialProps,
};

const CaseStudyHeader = ({
  title,
  tagline,
  headerClassName,
  headerImage,
  headerImageAlt,
  headerImageAlign = 'center',
  headerColor,
  children,
  social,
}: CaseStudyHeaderProps) =>
  <div>
    <Social {...social} />
    <div className={styles.header} style={{ backgroundColor: headerColor }}>
      <div className={styles.header__container}>
        <div className={cx('header__imageContainer', headerClassName)} style={{ justifyContent: headerImageAlign }}>
          <img src={headerImage} alt={headerImageAlt} className={styles.header__image} />
        </div>
      </div>
    </div>
    <div className={styles.content}>
      <div className={styles.content__wrapper}>
        <h1 className={styles.content__mainTitle}>
          {title}
        </h1>
        {tagline &&
          <h2 className={styles.content__tagline}>
            {tagline}
          </h2>}
      </div>
      {children}
    </div>
  </div>;

export default CaseStudyHeader;
