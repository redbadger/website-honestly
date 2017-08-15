// @flow
import React from 'react';

import CaseStudyFrame from '../../../../components/case-study-frame';
import CaseStudyHeader from '../../../../components/case-study-header';
import CaseStudySection from '../../../../components/case-study-section';
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
  <CaseStudyFrame>
    <CaseStudyHeader
      title="BMW Virtual Museum: The shortcut between you and the museum"
      headerImage={headerImage}
      headerImageAlt="image"
      headerColor="#f4f1f2"
      contactUsURL={contactUsURL}
      social={social}
    />
    <CaseStudySection title="The challenge">
      <p>The BMW Museum in Munich, Germany was opened in 1973 as one of the first brand museums. Displayed over 5,000 square metres of exhibition space are around 125 of the brand’s most precious and appealing cars, motorcycles and engines.
The Museum is a living building, comprising many innovative and immersive exhibitions that exude BMW’s passion for technical innovation. BMW wanted to live that brand through the museum’s web presence, and turned to Red Badger to discover how.</p>
    </CaseStudySection>

    <PullQuote
      author={{
        name: 'Martin Hartt',
        title: 'Badger Cub',
      }}
      text="I like coffee."
    />
    <CaseStudySection title="Okay">
      <p>Nope</p>
    </CaseStudySection>
  </CaseStudyFrame>

export default BMWCaseStudy;
