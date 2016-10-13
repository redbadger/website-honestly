import React from 'react';

import TopSlice from './top-slice';
import Brie from './brie-slice';
import BlogSlice from './blog-slice';
import CaseStudy from '../../components/case-study';
import TechSlice from './tech-slice';

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
