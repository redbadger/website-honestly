import React from 'react';

import TopSlice from './homepage-top-slice';
import Brie from './brie-slice';
import CaseStudy from '../../components/case-study';
import TechSlice from './tech-slice';
import Link from '../../components/link';

export default function HomePage() {
  return (
    <div>
      <TopSlice />
      <CaseStudy />
      <Brie />
      <TechSlice />

      <h1>Thing!</h1>
      <Link to="notFoundPage">Go somewhere?</Link>
    </div>
  );
}
