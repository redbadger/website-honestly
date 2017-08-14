// @flow
import React from 'react';

import GenericCaseStudy from '../../../../components/generic-case-study';
import PullQuote from '../../../../components/pull-quote';
import headerImage from './images/header.jpg';

type BMWCaseStudyProps = {
  contactUsURL: string,
};

const social = {
  title: 'The proof is in the pudding',
  description: 'Keeping up with the Financial Times',
  metaImage: headerImage,
  url: 'https://red-badger.com/our-work/case-study/financial-times',
};

const BMWCaseStudy = ({ contactUsURL }: BMWCaseStudyProps) =>
  <GenericCaseStudy
    title="BMW Virtual Museum: The shortcut between you and the museum"
    headerImage={headerImage}
    headerImageAlt="image"
    headerColor="#f4f1f2"
    contactUsURL={contactUsURL}
    social={social}
  >
    <p>Hello!</p>
    <PullQuote
      author={{
        name: 'Martin Hartt',
        title: 'Badger Cub',
      }}
      text="I like coffee."
    />
  </GenericCaseStudy>;

export default BMWCaseStudy;
