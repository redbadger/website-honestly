import React from 'react';
import { render } from 'enzyme';

import { Context } from '../../components/link/test-helper';

import BadgerProfile from './index';

const badger = {
  firstName: 'Sally',
  lastName: 'Badger',
  jobTitle: 'Literally just a badger',
  slug: 'no-not-a-slug-a-badger',
  primaryImageUrl: 'https://www.somefakebadgersite.com/image.jpg',
  secondaryImageUrl: 'https://www.somefakebadgersite.com/image2.jpg',
  about: "I have no idea why a badger is in the office but it hasn't bitten anyone yet",
  skills: 'Burrowing underground, eating grubs and stealing dog food.',
  achievements: 'I mean it got into Badger HQ and nobody has managed to evict her yet.',
  influence: "Probably looking to steal Milo's food",
  twitter: '@literallyABadger',
  github: 'beingABadgerIDoNotCode',
  linkedIn: 'grrrrr',
  squarespaceId: 'grrISaidGrrrr',
  categories: [{ slug: 'squelch', name: 'woodland-mammals', order: 1 }],
};

describe('site/pages/badger-profile', () => {
  it('renders correctly', () => {
    expect(
      render(
        <Context>
          <BadgerProfile badger={badger} />
        </Context>,
      ),
    ).toMatchSnapshot();
  });
});
