import nock from 'nock';

import { getJobs } from './index';

describe('site/fetchers/workable', () => {
  it('throws if request has incorrect access credentials', async () => {
    nock('https://www.workable.com')
      .get(/.*jobs*/)
      .reply(403, {});

    expect.assertions(1);

    try {
      await getJobs('bad key');
    } catch (e) {
      expect(e.message).toContain('Forbidden for request');
    }
  });
});
