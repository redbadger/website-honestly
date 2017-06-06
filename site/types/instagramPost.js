/* eslint-disable */
// @flow

/** Shape of returned data from the Instagram API */
type InstagramPost = {
  text: string,
  link: string,
  image: {
    url: string,
    width: string,
    height: string,
  },
  /** The comment count */
  comments: number,
  /** The like count */
  likes: number,
  /** Datetime string of when the post was posted */
  created: string,
};
