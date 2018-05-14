// @flow
import React from 'react';
import Helmet from 'react-helmet';

export type SocialProps = {
  title: string,
  description: string,
  metaImage: string,
  url: string,
};

const baseUrl = () => {
  if (window === 'undefined' || !!window.location) {
    return 'https://red-badger.com';
  }

  const { host, pathname, origin } = window.location;
  const staging = /^www-staging/.test(host);
  const branch = pathname.match(/\/(\d+)\//);

  if (staging && branch) {
    return `${origin}/${branch}`;
  }

  return origin;
};

const Social = ({ title, description, metaImage, url }: SocialProps) => (
  <Helmet
    meta={[
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@redbadgerteam' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: `${baseUrl()}${metaImage}` },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: url },
      { property: 'og:title', content: title },
      { property: 'og:image', content: `${baseUrl()}${metaImage}` },
      { property: 'og:description', content: description },
    ]}
  />
);

export default Social;
