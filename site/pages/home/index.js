import React from 'react';
import HomepageTopSlice from './homepage-top-slice';
import Brie from './brie-slice';
import BlogSlice from './blog-slice';

export default function HomePage() {
  return (
    <div>
      <HomepageTopSlice />
      <Brie />
      <BlogSlice />
    </div>
  );
}
