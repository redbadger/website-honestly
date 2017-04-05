import React from 'react';

import RetailerCaseStudy from './retailer';
import FMCaseStudy from './fortnums';
import WhatToReadNext from './what-to-read-next';
import ContactUsSlice from '../../../slices/contact-us-slice';

import styles from './style.css';

type CaseStudyContainerProps = {
  contactUsURL: string,
  retailer: object,
}

const slugToComponent = slug => (
  {
    'fortnum-and-mason': FMCaseStudy,
    retailer: RetailerCaseStudy,
  }[slug]
);

const CaseStudyContainer = ({ retailer, contactUsURL }: CaseStudyContainerProps) => {
  const RetailerPage = slugToComponent(retailer.slug);
  return (
    <div className={styles.caseStudy}>
      <RetailerPage />
      <WhatToReadNext />
      <ContactUsSlice postURL={contactUsURL} />
    </div>
  );
};

export default CaseStudyContainer;
