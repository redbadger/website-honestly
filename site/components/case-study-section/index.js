// @flow
import React from 'react';

import styles from './style.css';

type CaseStudySectionProps = {
  title: string,
  children?: Node,
};

const CaseStudySection = ({ title, children }: CaseStudySectionProps) =>
  <div className={styles.content}>
    <div className={styles.content__wrapper}>
      <h2>{title}</h2>
      {children}
    </div>
  </div>;

export default CaseStudySection;
