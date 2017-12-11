// @flow

import { expect } from 'chai';
import nock from 'nock';

import * as utils from './utils';

describe('webinar-registration-service/utils', () => {
  describe('apiBase', () => {
    it('is set to GoToWebinar base API URL', () => {
      expect(utils.apiBase).to.equal('https://api.getgo.com');
    });
  });

  describe('fetchWithBody', () => {
    it('fetches headers and body', () => {
      nock('https://example.com')
        .post('/users', {
          username: 'pgte',
          email: 'pedro.teixeira@gmail.com',
        })
        .reply(201, {
          uid: 123,
        });

      return expect(
        utils.fetchWithBody('https://example.com/users', {
          method: 'POST',
          body: JSON.stringify({
            username: 'pgte',
            email: 'pedro.teixeira@gmail.com',
          }),
        }),
      ).to.eventually.nested.include({
        'response.status': 201,
        'responseBody.uid': 123,
      });
    });
  });
});
