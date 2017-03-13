// @flow
import React from 'react';
import Helmet from 'react-helmet';

type SocialProps = {
  title: string,
  description: string,
  metaImage: string,
  url: string,
}

const Social = ({ title, description, metaImage, url }: SocialProps) => (
  <Helmet
    meta={[
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@redbadgerteam' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: `https://red-badger.com${metaImage}` },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: url },
      { property: 'og:title', content: title },
      { property: 'og:image', content: `https://red-badger.com${metaImage}` },
      { property: 'og:description', content: description },
    ]}
  />
);

export default Social;
