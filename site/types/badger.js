/* eslint-disable */
// @flow

export type Badger = {
  firstName: string,
  lastName: string,
  jobTitle: string,
  slug: string,
  primaryImageUrl: string,
  secondaryImageUrl: string,
  about: string,
  skills: string,
  achievements: string,
  influence: string,
  twitter: string,
  github: string,
  linkedIn: string,
  squarespaceId: string,
  hasBlogPosts: boolean,
  categories: Array<{ slug: string, name: string, order: number }>,
};
