import React from 'react';

import TopSlice from './homepage-top-slice';
import CaseStudy from '../../components/case-study';
import Brie from './brie-slice';
import TechSlice from '../../slices/tech-slice';
import BlogSlice from './blog-slice';
import NewsletterSlice from './newsletter-slice';
import NewsletterNoScriptSlice from './newsletter-slice/noscript';

export default function HomePage() {
  return (
    <div>
      <TopSlice />
      <CaseStudy />
      <Brie />
      <TechSlice />
      <BlogSlice />
      <NewsletterSlice />
      <NewsletterNoScriptSlice />
    </div>
  );
}
