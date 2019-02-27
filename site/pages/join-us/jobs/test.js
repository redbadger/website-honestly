import React from 'react';
import { render } from 'enzyme';
import Jobs from '.';
import { Context } from '../../../components/link/test-helper';

describe('site/join-us/benefits-slice', () => {
  it('should render nothing for empty array', () => {
    const jobsSlice = render(<Jobs jobs={[]} />);
    expect(jobsSlice.html()).toEqual(null);
  });

  it('should render heading 2', () => {
    const jobs = [
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
    ];
    const jobsSlice = render(
      <Context>
        <Jobs jobs={jobs} />
      </Context>,
    );
    expect(jobsSlice.find('h2').text()).toEqual('four legged friends');
  });

  it('should render jobs list', () => {
    const jobs = [
      {
        id: '1',
        title: 'chief awesome person',
        description: 'awesomeness is a full-time job so we need you here being awesome',
        fullDescription:
          'awesomeness is a full-time job so we need you here being awesome and that is all I have to say about that',
        department: 'four legged friends',
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
    ];
    const jobsSlice = render(
      <Context>
        <Jobs jobs={jobs} />
      </Context>,
    );
    const jobsList = jobsSlice.find('ul').first();
    expect(jobsList.children().length).toEqual(2);
  });

  it('should render category heading 3', () => {
    const jobs = [
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
    ];
    const jobsSlice = render(
      <Context>
        <Jobs jobs={jobs} />
      </Context>,
    );
    const jobsList = jobsSlice.find('ul').first();
    expect(jobsList.find('h3').text()).toEqual('Junior adorable dog');
  });
});
