// @flow
import React from 'react';
import Helmet from 'react-helmet';

import TopSlice from './homepage-top-slice';
import CaseStudy from '../../components/case-study';
import Brie from './brie-slice';
import TechSlice from '../../slices/tech-slice';
import BlogSlice from './blog-slice';
import ContactUs from '../../slices/contact-us-slice';
import NewsLetter from './newsletter-slice';

export type HomePageProps = {
  contactUsURL: string,
  featuredBlogPosts: Array<Object>,
};

const HomePage = ({ contactUsURL, featuredBlogPosts }: HomePageProps) => {
  const title = 'Red Badger';
  const description = 'Let’s make things better. We work with you to deliver digital products that make a difference to people.';
  const metaImage = 'https://red-badger.com/assets-honestly/social/rb_facebook.png';
  return (
    <div>
      <Helmet
        meta={[
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:site', content: '@redbadgerteam' },
          { name: 'twitter:title', content: title },
          { name: 'twitter:description', content: description },
          { name: 'twitter:image', content: metaImage },
          { property: 'og:type', content: 'website' },
          { property: 'og:url', content: 'https://red-badger.com' },
          { property: 'og:title', content: title },
          { property: 'og:image', content: metaImage },
          { property: 'og:description', content: description },
          { property: 'og:image:width', content: 1200 },
          { property: 'og:image:height', content: 630 },
        ]}
      />
      <TopSlice />
      <CaseStudy />
      <Brie />
      <TechSlice />
      <ContactUs postURL={contactUsURL} />
      <BlogSlice featuredBlogPosts={featuredBlogPosts} />
      <NewsLetter />
    </div>
  );
};

export default HomePage;
