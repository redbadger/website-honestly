import React from 'react';
import HomepageTopSlice from './homepage-top-slice';
import Brie from './brie-slice';

export default function HomePage() {
  return (
    <div>
      <HomepageTopSlice />
      <Brie />
    </div>
  );
}
