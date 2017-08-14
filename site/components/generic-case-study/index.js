// @flow
import React from 'react';

import Social from '../social';
import type { SocialProps } from '../social';
import WhatToReadNext from '../../pages/our-work/case-study/what-to-read-next';
import ContactUs from '../../slices/contact-us-slice';

import styles from './style.css';

type GenericCaseStudyProps = {
  title: string,
  headerImage: string,
  headerImageAlt: string,
  headerColor: string,
  children: Node,
  social: SocialProps,
  contactUsURL: string,
  currentPage: string,
};

const GenericCaseStudy = ({
  title,
  headerImage,
  headerImageAlt,
  headerColor,
  headerImageAlign,
  children,
  social,
  contactUsURL,
  currentPage,
}: GenericCaseStudyProps) =>
<div className={styles.caseStudy}>
  <Social {...social} />
  <div className={styles.header} style={{ backgroundColor: headerColor }}>
    <div className={styles.header__container}>
      <div className={styles.header__imageContainer}>
        <img
          src={headerImage}
          alt={headerImageAlt}
          className={styles.header__image}
        />
      </div>
    </div>
  </div>
  <div className={styles.content}>
    <div className={styles.content__wrapper}>
      <h1 className={styles.content__mainTitle}>{title}</h1>
    </div>
    {children}
  </div>
  <WhatToReadNext currentPage={currentPage} />
  <ContactUs postURL={contactUsURL} />
</div>;

export default GenericCaseStudy;
