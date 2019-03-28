import React from 'react';
import { render } from 'enzyme';

import { Context } from '../../components/link/test-helper';

import JoinUs from './index';

const jobs = [
  {
    id: '1',
    title: 'chief awesome person',
    description: 'awesomeness is a full-time job so we need you here being awesome',
    fullDescription:
      'awesomeness is a full-time job so we need you here being awesome and that is all I have to say about that',
    department: 'Awesome Squad',
    slug: 'awesome',
    applicationUrl: 'https://www.red-badger.com/jobs/awesome',
    datePosted: 'Thu Feb 08 2018 16:42:31 GMT+0000 (Greenwich Mean Time)',
  },
  {
    id: '2',
    title: 'Junior adorable dog',
    description:
      'Being (mostly) the only aodrable dog in the office is hard work for milo, so we need an apprentice to take up the slack',
    fullDescription:
      'Being (mostly) the only aodrable dog in the office is hard work for milo, so we need an apprentice to take up the slack and that is all I have to say about that',
    department: 'four legged friends',
    slug: 'woof',
    applicationUrl: 'https://www.red-badger.com/jobs/woof',
    datePosted: 'Thu Feb 08 2018 16:42:31 GMT+0000 (Greenwich Mean Time)',
  },
  {
    id: '3',
    title: 'Mid 2 Tea drinker',
    description:
      'Ideally you have 2-4 years experience drinking tea, proficiency with green and white teas is ideal but not required',
    fullDescription:
      'Ideally you have 2-4 years experience drinking tea, proficiency with green and white teas is ideal but not required and that is all I have to say about that',
    department: 'Caffiends',
    slug: 'slurp',
    applicationUrl: 'https://www.red-badger.com/jobs/tea',
    datePosted: 'Thu Feb 08 2018 16:42:31 GMT+0000 (Greenwich Mean Time)',
  },
];

describe('site/pages/join-us', () => {
  it('renders correctly', () => {
    expect(
      render(
        <Context>
          <JoinUs jobs={jobs} />
        </Context>,
      ),
    ).toMatchSnapshot();
  });
});
