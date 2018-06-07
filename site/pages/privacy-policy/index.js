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
  url: 'privacy-policy',
  altText: 'Red Badger logo',
};

const PrivacyPolicyPage = () => {
  return (
    <Policy
      title="Red Badger Privacy Statement"
      effectiveDate="23 May 2018"
      policies={policies}
      social={social}
    />
  );
};

export default PrivacyPolicyPage;
