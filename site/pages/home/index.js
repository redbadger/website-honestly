import React from 'react';

import TopSlice from './homepage-top-slice';
import CaseStudy from '../../components/case-study';
import Brie from './brie-slice';
import TechSlice from '../../slices/tech-slice';
import BlogSlice from './blog-slice';
import ContactUs from './contact-us-slice';
import NewsLetter from './newsletter-slice';

const HomePage = ({ contactUsURL }) => (
  <div>
    <TopSlice />
    <CaseStudy />
    <Brie />
    <TechSlice />
    <ContactUs postURL={contactUsURL} />
    <BlogSlice />
    <NewsLetter />
  </div>
);

const { string } = React.PropTypes;
HomePage.propTypes = {
  contactUsURL: string,
};

export default HomePage;
