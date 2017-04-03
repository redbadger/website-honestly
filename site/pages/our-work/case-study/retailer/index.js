import React from 'react';
import styles from './style.css';

import FMCaseStudy from './fortnums';
import WhatToReadNext from '../what-to-read-next';

type CaseStudyRetailerProps = {
  retailer: object,
}

const slugToComponent = slug => (
  {
    'fortnum-and-mason': FMCaseStudy,
  }[slug]
);

const CaseStudyRetailer = ({ retailer }: CaseStudyRetailerProps) => {
  const RetailerPage = slugToComponent(retailer.slug);
  return (
    <div className={styles.caseStudy}>
      <RetailerPage />
      <WhatToReadNext />
    </div>
  );
};

export default CaseStudyRetailer;
