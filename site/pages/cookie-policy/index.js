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
  url: 'cookie-policy',
};

const CookiePolicyPage = () => {
  return (
    <Policy
      title={'Cookies Policy'}
      effectiveDate={'24 of May 2018'}
      policies={policies}
      social={social}
    />
  );
};

export default CookiePolicyPage;
