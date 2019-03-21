/* eslint-disable */
// @flow

/** Shape of returned data from the Twitter API */

export type Tweet = {
  text: string,
  url: string,
  retweetCount: number,
  favouriteCount: number,
  created: string,
  image: ?{
    url: string,
    smallSize: {
      width: number,
      height: number,
    },
  },
};
