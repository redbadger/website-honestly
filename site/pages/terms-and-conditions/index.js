// @flow
import React from 'react';

import Policy from '../../components/policy';
import metaImage from '../home/meta-image.jpg';
import policies from './policy';

const social = {
  title: 'Red Badger',
  description:
    'Let’s make things better. We are digital transformation experts who innovate and deliver.',
  metaImage,
  altText: 'Red Badger logo',
  url: 'terms-and-conditions',
};

const TermAndConditionsPage = () => {
  return (
    <Policy
      title="Website Terms"
      effectiveDate="7 of June 2018"
      policies={policies}
      social={social}
    />
  );
};

export default TermAndConditionsPage;
