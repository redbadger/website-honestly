import React from 'react';
import HomepageTopSlice from './homepage-top-slice';
import Brie from './brie-slice';
import CaseStudy from '../../components/case-study';

export default function HomePage() {
  return (
    <div>
      <HomepageTopSlice />
      <CaseStudy />
      <Brie />
    </div>
  );
}
