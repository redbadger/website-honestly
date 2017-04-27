// @flow
import React from 'react';

import TopSlice from './homepage-top-slice';
import CaseStudy from '../../components/case-study';
import Brie from './brie-slice';
import TechSlice from '../../slices/tech-slice';
import BlogSlice from './blog-slice';
import ContactUs from '../../slices/contact-us-slice';
import NewsLetter from './newsletter-slice';
import Social from '../../components/social';

import metaImage from './meta-image.png';

export type HomePageProps = {
  contactUsURL: string,
  featuredBlogPosts: Array<Object>,
};

const HomePage = ({ contactUsURL, featuredBlogPosts }: HomePageProps) => {
  const social = {
    title: 'Red Badger',
    description: 'Let’s make things better. We work with you to deliver digital products that make a difference to people.',
    metaImage,
    url: 'https://red-badger.com',
  };
  return (
    <div>
      <Social {...social} />
      <TopSlice />
      <CaseStudy />
      <Brie />
      <TechSlice />
      <ContactUs postURL={contactUsURL} yellow />
      <BlogSlice featuredBlogPosts={featuredBlogPosts} />
      <NewsLetter />
    </div>
  );
};

export default HomePage;
