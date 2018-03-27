// @flow
import * as React from 'react';

import styles from './style.css';

type CaseStudyFrameProps = {
  children?: React.Node,
};

const CaseStudyFrame = ({ children }: CaseStudyFrameProps) => (
  <div className={styles.caseStudy}>{children}</div>
);

export default CaseStudyFrame;
