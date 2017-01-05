// @flow
import handleErrors from './handle-errors';
import type { InstagramPost } from '../types/';

type InstagramResponsePost = {
  created_time: string,
  comments: {
    count: number;
  },
  caption: {
    text: string
  },
  likes: {
    count: number
  },
  images: {
    thumbnail: {
      url: string,
      width: number;
      height: number;
    }
  }
};

type InstagramResponse = {
  data: Array<InstagramResponsePost>
};


export const isValidPost = (post: InstagramResponsePost) => {
  try {
    if (!post) {
      throw new Error('Missing post');
    }

    if (!post.caption) {
      throw new Error('Missing caption');
    }

    if (!post.caption.text) {
      throw new Error('Missing text');
    }

    if (!post.images) {
      throw new Error('Missing images');
    }

    if (!post.images.thumbnail.url) {
      throw new Error('Missing images thumbnail url');
    }

    if (!post.images.thumbnail) {
      throw new Error('Missing images thumbnail');
    }

    if (parseInt(post.images.thumbnail.width, 10) < 0) {
      throw new Error('Missing images thumbnail width');
    }

    if (parseInt(post.images.thumbnail.height, 10) < 0) {
      throw new Error('Missing images thumbnail height');
    }
  } catch (e) {
    return false;
  }

  return true;
};

export const normalisePost = (post: InstagramResponsePost) => {
  return {
    text: post.caption.text,
    image: {
      url: post.images.thumbnail.url,
      width: post.images.thumbnail.width,
      height: post.images.thumbnail.height,
    },
    likes: post.likes.count,
    created: post.created_time,
  };
};

const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN || '';
const apiQuery = `https://api.instagram.com/v1/users/self/media/recent/?access_token=${accessToken}`;

export const getPosts = (fetch: any): Promise<Array<InstagramPost>> => (
  fetch(apiQuery, {
    headers: {
      'Content-Type': 'application/json',
    },
    timeout: 10000,
  })
    .then(handleErrors)
    .then(response => response.json())
    .then((response: InstagramResponse) => {
      const normalised = response.data
        .filter(isValidPost)
        .map(normalisePost)
        .sort(post => new Date(post.created));

      console.log(normalised);
      // Take the top 5 posts
      return normalised.slice(0, 5);
    })
);
