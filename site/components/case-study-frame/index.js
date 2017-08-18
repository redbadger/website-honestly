// @flow
import React from 'react';

import styles from './style.css';

type CaseStudyFrameProps = {
  children?: Node,
};

const CaseStudyFrame = ({ children }: CaseStudyFrameProps) =>
  <div className={styles.caseStudy}>
    {children}
  </div>;

export default CaseStudyFrame;
