// @flow
import React from 'react';

import TopSlice from './homepage-top-slice';
import CaseStudyOverview from '../../components/case-study-overview';
import AwardsSlice from '../../slices/awards-slice';
import ChecklistContactUs from '../../slices/checklist-contact-us-slice';
import ShareThymeSlice from '../../slices/sharethyme-slice';
import Social from '../../components/social';
import HubspotSignup from './hubspot-signup';
import TechSlice from '../../slices/tech-slice';
import { SpruceSlice } from '../../components/slice';

import metaImage from './meta-image.jpg';
import TestimonialsSlice from './client-testimonials-slice';
import ScrollTracker from '../../components/scroll-tracker';

export default function HomePage() {
  const social = {
    title: 'Red Badger',
    description:
      'Let’s make things better. We are digital transformation experts who innovate and deliver.',
    metaImage,
    altText: 'Red Badger logo.',
    url: 'https://red-badger.com',
  };

  return (
    <ScrollTracker>
      <Social {...social} />
      <TopSlice />
      <CaseStudyOverview />
      <SpruceSlice>
        <ShareThymeSlice linkUrl="https://www.red-badger.com/sharethyme" />
      </SpruceSlice>
      <TestimonialsSlice />
      <TechSlice />
      <ChecklistContactUs />
      <HubspotSignup />
      <AwardsSlice />
    </ScrollTracker>
  );
}
