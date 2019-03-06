// @flow
import React from 'react';

import TopSlice from './homepage-top-slice';
import CaseStudyOverview from '../../components/case-study-overview';
import TechSlice from '../../slices/tech-slice';
import AwardsSlice from '../../slices/awards-slice';
import ChecklistContactUs from '../../slices/checklist-contact-us-slice';
import NewsLetter from './newsletter-slice';
import TechLabSlice from '../../slices/techlab-slice';
import Social from '../../components/social';
import HubspotSignup from './hubspot-signup';
import { YellowSlice } from '../../components/slice';

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

  const hubspotSignup = true;

  return (
    <ScrollTracker>
      <Social {...social} />
      <TopSlice />
      <CaseStudyOverview />
      <YellowSlice>
        <TechLabSlice linkUrl="https://hubs.ly/H0gG3Wh0" />
      </YellowSlice>
      <TestimonialsSlice />
      <TechSlice />
      <ChecklistContactUs />
      <AwardsSlice />
      {hubspotSignup ? <HubspotSignup /> : <NewsLetter />}
    </ScrollTracker>
  );
}
