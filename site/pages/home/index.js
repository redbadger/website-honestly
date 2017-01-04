// @flow
import React from 'react';

import TopSlice from './homepage-top-slice';
import CaseStudy from '../../components/case-study';
import Brie from './brie-slice';
import TechSlice from '../../slices/tech-slice';
import BlogSlice from './blog-slice';
import ContactUs from '../../slices/contact-us-slice';
import NewsLetter from './newsletter-slice';

export type HomePageProps = {
  contactUsURL: string,
  featuredBlogPosts: Array<Object>,
};

const HomePage = ({ contactUsURL, featuredBlogPosts }: any) => (
  <div>
    <TopSlice />
    <CaseStudy />
    <Brie />
    <TechSlice />
    <ContactUs postURL={contactUsURL} />
    <BlogSlice featuredBlogPosts={featuredBlogPosts} />
    <NewsLetter />
  </div>
);

export default HomePage;
