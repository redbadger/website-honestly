/* eslint-disable */
// @flow

/** Shape of returned data from the Instagram API */
declare type InstagramPost = {
  text: string,
  url: string;
  image: {
    width: string;
    height: string;
  },
  /** The comment count */
  comments: number,
  /** The like count */
  likes: number,
  /** Datetime string of when the post was posted */
  created: string,
};
