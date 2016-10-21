import React from 'react';

import TopSlice from './homepage-top-slice';
import CaseStudy from '../../components/case-study';
import Brie from './brie-slice';
import TechSlice from '../../slices/tech-slice';
import BlogSlice from './blog-slice';
import ContactUs from './contact-us-slice';
import NewsLetter from './newsletter-slice';

const HomePage = ({ data }) => (
  <div>
    <TopSlice />
    <CaseStudy />
    <Brie />
    <TechSlice />
    <ContactUs postURL={data.contactUsURL} />
    <BlogSlice />
    <NewsLetter />
  </div>
);

const { shape, string } = React.PropTypes;
HomePage.propTypes = {
  data: shape({
    contactUsURL: string,
  }).isRequired,
};

export default HomePage;
