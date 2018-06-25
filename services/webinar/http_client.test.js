import nock from 'nock';

import * as utils from './http_client';

describe('webinar-registration-service/utils', () => {
  describe('apiBase', () => {
    it('is set to GoToWebinar base API URL', () => {
      expect(utils.apiBase).toEqual('https://api.getgo.com');
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

      const request = utils.fetchWithBody('https://example.com/users', {
        method: 'POST',
        body: JSON.stringify({
          username: 'pgte',
          email: 'pedro.teixeira@gmail.com',
        }),
      });

      expect.assertions(1);

      return request.then(data => expect(data.response.status).toEqual(201));
    });
  });
});
