// @flow
import React from 'react';

import WhatToReadNext from '../shared/what-to-read-next';
import ChecklistContactUs from '../../../../slices/checklist-contact-us-slice';

import CaseStudyFrame from '../../../../components/case-study-frame';
import CaseStudyHeader from '../../../../components/case-study-header';
import CaseStudySection from '../../../../components/case-study-section';
import PullQuote from '../../../../components/pull-quote';
import headerImage from './images/header.jpg';
import articleImage from './images/article.jpg';
import ScrollTracker from '../../../../components/scroll-tracker';

const social = {
  title: 'BMW Virtual Museum | Red Badger',
  description: 'BMW Virtual Museum: The shortcut between you and the museum',
  metaImage: headerImage,
  altText: 'A 3D rendered illustration of car.',
  url: 'https://red-badger.com/our-work/case-study/bmw',
};

const BMWCaseStudy = () => (
  <ScrollTracker>
    <CaseStudyFrame>
      <CaseStudyHeader
        title="BMW Virtual Museum: The shortcut between you and the museum"
        headerImage={headerImage}
        headerImageAlt="Range of devices showing BMW virtual museum"
        headerColor="#f4f1f2"
        social={social}
      />
      <CaseStudySection title="The challenge">
        <p>
          The BMW Museum in Munich, Germany was opened in 1973 as one of the first brand museums.
          Displayed over 5,000 square metres of exhibition space are around 125 of the brand’s most
          precious and appealing cars, motorcycles and engines.
        </p>
        <p>
          The Museum is a living building, comprising many innovative and immersive exhibitions that
          exude BMW’s passion for technical innovation. BMW wanted to live that brand through the
          museum’s web presence, and turned to Red Badger to discover how.
        </p>
      </CaseStudySection>
      <PullQuote
        author={{
          name: 'Dr. Rodepeter',
          title: 'Director, BMW Museum',
        }}
        text="The BMW Museum Virtual Tour is a great way for visitors to immerse themselves in what the museum has to offer"
      />

      <CaseStudySection title="Solution">
        <p>
          Focusing on the museum’s unique Karl Schwanzer architectural design, as much a spectacle
          as the exhibits it houses, our 3D artists recreated the building along with some of its
          most iconic content. Using the latest HTML5 technologies and custom sound design, we
          brought the 3D model alive, allowing users to explore and experience the exhibit space.
        </p>
        <p>
          Using the companion iPhone, iPad and Android apps we created, visitors are able to
          retrieve the itinerary they created on the website to enhance their experience as they
          navigate around the museum.
          <img alt="BMW car" src={articleImage} />
        </p>
      </CaseStudySection>
      <CaseStudySection title="Business benefits">
        <p>
          By providing a joined-up experience across web, mobile and the museum itself, a visitor’s
          journey is supported from start to finish, enhancing what is already a unique experience.
        </p>
        <p>
          Providing greater insight to the museum’s contents and experience than ever before, BMW
          believes more visitors will be encouraged to enjoy what has long been one of Munich’s most
          popular highlights.
        </p>
      </CaseStudySection>

      <WhatToReadNext />
      <ChecklistContactUs />
    </CaseStudyFrame>
  </ScrollTracker>
);

export default BMWCaseStudy;
