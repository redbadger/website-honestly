import fetch from 'node-fetch';
/* eslint-disable camelcase */
import { getJobs } from './workable';

describe('Fetching jobs', () => {
  it('Returns empty array when fetch job fails', async () => {
    const jobs = await getJobs(fetch, 'bad key');
    expect(jobs.length).toBe(0);
  });
});
