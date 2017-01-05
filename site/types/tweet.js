/* eslint-disable */
// @flow

/** Shape of returned data from the Twitter API */
declare type Tweet = {
  text: string,
  url: string,
  retweetCount: number,
  favouriteCount: number,
  created: string,
};
