import dotenv from 'dotenv';
dotenv.load();

export const workable = {
  key: process.env.WORKABLE_KEY,
};

export const hot = process.env.HOT !== undefined;
export const port = process.env.PORT || 8000;

export const prismicApiEndpoint = (
  process.env.APP_ENV === 'production'
    ? 'https://rb-website.prismic.io/api'
    : 'https://rb-website-stage.prismic.io/api'
);

export * from '../shared/config';
