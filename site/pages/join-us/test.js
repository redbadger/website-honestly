import React from 'react';
import { mount } from 'enzyme';

import { Context } from '../../components/link/test-helper';

import JoinUs from './index';

const jobs = [
  {
    title: 'chief awesome person',
    description: 'awesomeness is a full-time job so we need you here being awesome',
    department: 'Awesome Squad',
    slug: 'awesome',
  },
  {
    title: 'Junior adorable dog',
    description:
      'Being (mostly) the only aodrable dog in the office is hard work for milo, so we need an apprentice to take up the slack',
    department: 'four legged friends',
    slug: 'woof',
  },
  {
    title: 'Mid 2 Tea drinker',
    description:
      'Ideally you have 2-4 years experience drinking team, proficiency with green and white teas is ideal but not required',
    department: 'Caffiends',
    slug: 'slurp',
  },
];

describe('site/pages/join-us', () => {
  it('renders correctly', () => {
    expect(
      mount(
        <Context>
          <JoinUs jobs={jobs} />
        </Context>,
      ),
    ).toMatchSnapshot();
  });
});
