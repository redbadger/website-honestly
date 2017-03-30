import React from 'react';
import classnames from 'classnames/bind';
import styles from './style.css';

import FMCaseStudy from './fortnums';
import WhatToReadNext from '../what-to-read-next';
import ContactUs from '../../../../slices/contact-us-slice';

const cx = classnames.bind(styles);

type CaseStudyRetailerProps = {
  contactUsURL: string,
  retailer: object,
}

const slugToComponent = slug => (
  {
    'fortnum-and-mason': FMCaseStudy,
  }[slug]
);

const CaseStudyRetailer = ({ contactUsURL, retailer }: CaseStudyRetailerProps) => {
  const RetailerPage = slugToComponent(retailer.slug);
  return (
    <div className={styles.caseStudy}>
      <RetailerPage retailerStyles={styles} cx={cx} />
      <WhatToReadNext />
      <ContactUs postURL={contactUsURL} />
    </div>
  );
};

export default CaseStudyRetailer;
