import nock from 'nock';

import { getJobs } from './index';

describe('site/fetchers/workable', () => {
  it('returns error if request has incorrect access credentials', async () => {
    nock('https://redbadger.workable.com')
      .get(/.*jobs*/)
      .reply(403, {});

    const error = await getJobs('bad key');
    expect(error.message).toContain('Forbidden');
  });
});
