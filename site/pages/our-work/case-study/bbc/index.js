// @flow
import React from 'react';

import WhatToReadNext from '../what-to-read-next';
import ChecklistContactUs from '../../../../slices/new-contact-us-slice';

import CaseStudyFrame from '../../../../components/case-study-frame';
import CaseStudyHeader from '../../../../components/case-study-header';
import CaseStudySection from '../../../../components/case-study-section';
import PullQuote from '../../../../components/pull-quote';
import headerImage from './images/header.jpg';

const social = {
  title: 'The proof is in the pudding',
  description: 'BBC Now: Delivering a better customer experience, faster',
  metaImage: headerImage,
  url: 'https://red-badger.com/our-work/case-study/bbc-now',
};

const BBCCaseStudy = () => (
  <CaseStudyFrame>
    <CaseStudyHeader
      title="BBC Now: Delivering a better customer experience, faster"
      tagline="How the rapid prototyping model helped the BBC to uncover new ways to engage its audience"
      headerImage={headerImage}
      headerImageAlt="Tablet device showing screenshot of BBC website"
      headerColor="#F2F3ED"
      social={social}
    />
    <PullQuote
      author={{
        name: 'Eleni Sharp',
        title: 'Senior product manager, BBC Connected Studios',
      }}
      text="Red Badger is bursting with creativity... and makes the complicated straightforward."
    />

    <CaseStudySection title="The challenge">
      <p>
        Nine million people visit the BBC Homepage each week but most use it as an access point to
        specific information and miss lots of valuable and relevant content. And, although
        personalisation tools are available, less than 10% of visitors use them.
      </p>
      <p>
        Tasked with finding new ways to engage consumers, BBC Connected Studio was looking for
        creative ideas that would make it easier for visitors to the site to find content relevant
        to them.
      </p>
    </CaseStudySection>

    <CaseStudySection title="Solution">
      <p>
        The concept Red Badger came up with was effectively a fast lane. A real-time stream of BBC
        content delivered to the homepage, in bite-sized chunks, the instant it’s published.
      </p>
      <p>
        Combining this with the semantic web, allowing data to be shared across platforms and
        communities, means the content is refined as the site ‘learns’ more about what a user
        accesses and how they interact with it.
      </p>
    </CaseStudySection>
    <PullQuote
      author={{
        name: 'Eleni Sharp',
        title: 'Senior product manager, BBC Connected Studios',
      }}
      text="The concept appealed because it allowed us to showcase much more content without overcomplicating the existing site. Plus the feed learns from the user's behaviour and becomes more and more personalised the more it learns."
    />
    <CaseStudySection title="Business benefits">
      <p>
        For Connected Studio the key metric was the feedback from consumers and overall the reaction
        was very positive. The concept was proven to be easy to understand, and more than 75% of
        users agreed the concept was appealing; nearly 50% said they would be very likely to use BBC
        Now if it went live.
      </p>
    </CaseStudySection>

    <WhatToReadNext />
    <ChecklistContactUs />
  </CaseStudyFrame>
);

export default BBCCaseStudy;
