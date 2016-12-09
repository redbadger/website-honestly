// @flow

import React from 'react';

import TopSlice from './homepage-top-slice';
import CaseStudy from '../../components/case-study';
import Brie from './brie-slice';
import TechSlice from '../../slices/tech-slice';
import BlogSlice from './blog-slice';
import ContactUs from './contact-us-slice';
import NewsLetter from './newsletter-slice';
import type { BlogPost } from './blog-slice/blog-entry';

type Props = {|
  contactUsURL: string,
  featuredBlogPosts: Array<BlogPost>,
|}

const HomePage = ({ contactUsURL, featuredBlogPosts }: Props) => (
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
