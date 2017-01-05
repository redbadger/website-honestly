/* eslint-disable */
// @flow

/** Shape of returned data from the Instagram API */
declare type InstagramPost = {
  text: string,
  image: {
    url: string;
    width: string;
    height: string;
  },
  likes: number,
  /** Datetime string of when the post was posted */
  created: string,
};
