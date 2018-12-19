import nock from 'nock';

import { getData } from './index';

describe('site/fetchers/badger-brain', () => {
  beforeAll(() => {
    process.env.BADGER_BRAIN_HOST = 'https://brain-staging.red-badger.com/graphql';
  });

  afterAll(() => {
    delete process.env.BADGER_BRAIN_HOST;
  });

  it('throws if server is unavailable', async () => {
    nock('https://brain-staging.red-badger.com')
      .post(/.*graphql*/)
      .reply(500, {});

    expect.assertions(1);

    try {
      await getData();
    } catch (e) {
      expect(e.message).toContain('Internal Server Error');
    }
  });
});
