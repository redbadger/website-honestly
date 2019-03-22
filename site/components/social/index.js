// @flow
import React from 'react';
import Helmet from 'react-helmet';

export type SocialProps = {
  title: string,
  description: string,
  metaImage: string,
  altText: string,
  url?: string,
};

const Social = ({ title, description, metaImage, altText, url }: SocialProps) => (
  <Helmet
    meta={[
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@redbadgerteam' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: `https://red-badger.com${metaImage}` },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: title },
      { property: 'og:image', content: `https://red-badger.com${metaImage}` },
      { property: 'og:image:secure_url', content: `https://red-badger.com${metaImage}` },
      { property: 'og:image:alt', content: altText },
      { property: 'og:description', content: description },
    ].concat(url ? [{ property: 'og:url', content: url }] : [])}
  />
);

export default Social;
