/* eslint-disable camelcase */
import nock from 'nock';

import { isValidPost, getPosts } from './instagram';

const generatePost = () => {
  return {
    created_time: '2017-01-01',
    link: 'asd',
    comments: {
      count: 0,
    },
    caption: {
      text: 'test',
    },
    likes: {
      count: 0,
    },
    images: {
      standard_resolution: {
        url: 'asd',
        width: 100,
        height: 100,
      },
    },
  };
};

describe('site/fetchers/instagram', () => {
  describe('instagram fetcher post validation', () => {
    it('passes with valid post', () => {
      const result = isValidPost(generatePost());
      expect(result).toEqual(true);
    });

    it('fails with null value', () => {
      const result = isValidPost(null);
      expect(result).toEqual(false);
    });

    it('fails with empty post', () => {
      const post = {};
      const result = isValidPost(post);
      expect(result).toEqual(false);
    });

    it('rfails with no text', () => {
      const post = generatePost();
      post.caption.text = '';
      const result = isValidPost(post);
      expect(result).toEqual(false);
    });

    it('fails with no link', () => {
      const post = generatePost();
      post.link = null;
      const result = isValidPost(post);
      expect(result).toEqual(false);
    });

    it('fails with no images', () => {
      const post = generatePost();
      post.images = null;

      const result = isValidPost(post);
      expect(result).toEqual(false);
    });

    it('fails with no thumbnail image', () => {
      const post = generatePost();
      post.images.standard_resolution.url = undefined;
      const result = isValidPost(post);
      expect(result).toEqual(false);
    });

    it('fails with no image url', () => {
      const post = generatePost();
      post.images.standard_resolution.url = '';
      const result = isValidPost(post);
      expect(result).toEqual(false);
    });

    it('fails with invalid image width', () => {
      const post = generatePost();
      post.images.standard_resolution.width = '-1';
      const result = isValidPost(post);
      expect(result).toEqual(false);
    });

    it('fails with invalid image height', () => {
      const post = generatePost();
      post.images.standard_resolution.height = '-1';
      const result = isValidPost(post);
      expect(result).toEqual(false);
    });
  });

  describe('fetching posts', () => {
    it('throws if request has incorrect access credentials', async () => {
      nock('https://api.instagram.com')
        .get(/.*media*/)
        .reply(403, {});

      expect.assertions(1);

      try {
        await getPosts('bad token');
      } catch (e) {
        expect(e.message).toContain('Forbidden for request');
      }
    });

    it('throws if token is missing', () => {
      expect(() => getPosts(null)).toThrow();
    });
  });
});
