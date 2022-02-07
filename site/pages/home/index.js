// @flow
import React from 'react';

import TopSlice from './homepage-top-slice';
import CaseStudyOverview from '../../components/case-study-overview';
import AwardsSlice from '../../slices/awards-slice';
import ChecklistContactUs from '../../slices/checklist-contact-us-slice';
import Social from '../../components/social';
import HubspotSignup from './hubspot-signup';
import TechSlice from '../../slices/tech-slice';
import GoldCoinSlice from '../../slices/gc-slice';
import MBPSlice from './mbp-slice';

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
    <React.Fragment>
      <ScrollTracker>
        <Social {...social} />
        <TopSlice />
        <GoldCoinSlice />
        <CaseStudyOverview />
        <MBPSlice />
        <TestimonialsSlice />
        <TechSlice />
        <ChecklistContactUs />
        <HubspotSignup />
        <AwardsSlice />
      </ScrollTracker>
    </React.Fragment>
  );
}
