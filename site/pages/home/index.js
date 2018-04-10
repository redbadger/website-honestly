// @flow
import React from 'react';

import TopSlice from './homepage-top-slice';
import CaseStudyOverview from '../../components/case-study-overview';
import TechSlice from '../../slices/tech-slice';
import AwardsSlice from '../../slices/awards-slice';
import ChecklistContactUs from '../../slices/checklist-contact-us-slice';
import NewsLetter from './newsletter-slice';
import Social from '../../components/social';
import metaImage from './meta-image.png';

export default function HomePage() {
  const social = {
    title: 'Red Badger',
    description:
      'Let’s make things better. We are digital transformation experts who innovate and deliver.',
    metaImage,
    url: 'https://red-badger.com',
  };

  return (
    <div>
      <Social {...social} />
      <TopSlice />
      <CaseStudyOverview />
      <ChecklistContactUs />
      <TechSlice />
      <AwardsSlice />
      <NewsLetter />
    </div>
  );
}
