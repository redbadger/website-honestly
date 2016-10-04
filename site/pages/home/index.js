import React from 'react';
<<<<<<< ce44647bcb533df7d27c3c25f7ba080051ca2509
import HomepageTopSlice from './homepage-top-slice';
import Brie from './brie-slice';
=======
import Link from '../../components/link';
import styles from './index.css';
import CaseStudy from '../../components/case-study';
>>>>>>> Added SVGs used in case study section of the home page

export default function HomePage() {
  return (
    <div>
      <HomepageTopSlice />
      <Brie />
      <CaseStudy />
    </div>
  );
}
