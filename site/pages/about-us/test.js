import React from 'react';
import { mount } from 'enzyme';

import { Context } from '../../components/link/test-helper';

import AboutUs from './index';

const tweets = [
  {
    text: 'I am a tweet',
    url: 'https://www.somefakelink-redbadger.com',
    retweetCount: 1,
    favouriteCount: 2,
    created: '1988-02-11',
  },
];

const instagramPosts = [
  {
    text: 'I am an instagram posts',
    link: 'https://www.somefakelink-redbadger.com',
    image: {
      url: 'https://www.somefakelink-redbadger.com/image.jpg',
      width: '640px',
      height: '640px',
    },
    comments: 1,
    likes: 2,
    created: '1988-02-11',
  },
];

const qAndAs = [
  {
    name: 'I am a qanda',
    topics: [
      {
        slug: 'squelch-slime-slugstuff',
        question: 'why do you slugs keep eating my cabbages',
        answer: "cuz they're delicious",
      },
    ],
  },
];

describe('site/pages/about-us', () => {
  it('renders correctly', () => {
    expect(
      mount(
        <Context>
          <AboutUs tweets={tweets} instagramPosts={instagramPosts} qAndAs={qAndAs} />
        </Context>,
      ),
    ).toMatchSnapshot();
  });
});
