import nock from 'nock';

import fetchRetry from './fetch-retry';

describe('fetch-retry', () => {
  const expectedUrl = 'http://some-url.com';

  describe('nominal', () => {
    it('do the fetch call normally', done => {
      nock(expectedUrl)
        .get(/.*/)
        .reply(200, '"Hello World"');
      expect.assertions(1);
      fetchRetry(expectedUrl)
        .then(response => response.json())
        .then(data => {
          expect(data).toEqual('Hello World');
          done();
        });
    });
  });

  describe('when #options.retries=3 (default)', () => {
    describe('when first call is a failure', () => {
      beforeEach(() => {
        nock(expectedUrl)
          .get(/.*/)
          .reply(500, '"Oh noooooo"');
        nock(expectedUrl)
          .get(/.*/)
          .reply(200, '"Hello World"');
      });
      it('returns the right value', done => {
        expect.assertions(1);
        fetchRetry(expectedUrl)
          .then(response => response.json())
          .then(data => {
            expect(data).toEqual('Hello World');
            done();
          });
      });
    });

    describe('when all calls are a failure', () => {
      beforeEach(() => {
        nock(expectedUrl)
          .get(/.*/)
          .reply(500, '"Oh noooo"');
      });
      it('returns the right value', done => {
        expect.assertions(1);
        fetchRetry(expectedUrl, { retryDelay: 1 })
          .then(response => response.json())
          .catch(error => {
            expect(error).toBeDefined();
            done();
          });
      });
    });
  });
});
