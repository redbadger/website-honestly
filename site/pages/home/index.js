// @flow
import React from 'react';

import TopSlice from './homepage-top-slice';
import CaseStudyOverview from '../../components/case-study-overview';
import Brie from './brie-slice';
import TechSlice from '../../slices/tech-slice';
import BlogSlice from './blog-slice';
import ChecklistContactUs from '../../slices/new-contact-us-slice';
import NewsLetter from './newsletter-slice';
import Social from '../../components/social';

import metaImage from './meta-image.png';

export type HomePageProps = {
  contactUsURL: string,
  featuredBlogPosts: Array<Object>,
};

const HomePage = ({ featuredBlogPosts }: HomePageProps) => {
  const social = {
    title: 'Red Badger',
    description:
      'Let’s make things better. We work with you to deliver digital products that make a difference to people.',
    metaImage,
    url: 'https://red-badger.com',
  };
  return (
    <div>
      <Social {...social} />
      <TopSlice />
      <CaseStudyOverview />
      <Brie />
      <TechSlice />
      <ChecklistContactUs />
      <BlogSlice featuredBlogPosts={featuredBlogPosts} />
      <NewsLetter />
    </div>
  );
};

export default HomePage;
