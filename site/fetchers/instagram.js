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
    standard_resolution: {
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

    if (!post.images.standard_resolution) {
      throw new Error('Missing images standard_resolution');
    }

    if (!post.images.standard_resolution.url) {
      throw new Error('Missing image url');
    }


    if (parseInt(post.images.standard_resolution.width, 10) < 0) {
      throw new Error('Missing image width');
    }

    if (parseInt(post.images.standard_resolution.height, 10) < 0) {
      throw new Error('Missing images height');
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
      url: post.images.standard_resolution.url,
      width: post.images.standard_resolution.width,
      height: post.images.standard_resolution.height,
    },
    comments: post.comments.count,
    likes: post.likes.count,
    created: post.created_time,
  };
};

export const getPosts = (fetch: any): Promise<Array<InstagramPost>> => {
  const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;
  if (!accessToken) {
    throw new Error('Missing env varible INSTAGRAM_ACCESS_TOKEN');
  }
  const apiQuery = `https://api.instagram.com/v1/users/self/media/recent/?access_token=${accessToken}`;

  return fetch(apiQuery, {
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

      // Take the top 5 posts
      return normalised.slice(0, 5);
    });
};
