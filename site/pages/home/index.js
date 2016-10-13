import React from 'react';

import TopSlice from './homepage-top-slice';
import CaseStudy from '../../components/case-study';
import TechSlice from './tech-slice';
import Brie from './brie-slice';
import BlogSlice from './blog-slice';

export default function HomePage() {
  return (
    <div>
      <TopSlice />
      <CaseStudy />
      <Brie />
      <TechSlice />
      <BlogSlice />
    </div>
  );
}
