// @flow

import { expect } from 'chai';
import nock from 'nock';

import { apiBase } from './utils';
import ApiCredentialsManager from './authenticate';

function expectHttpRequest(status) {
  const reqheaders = {
    accept: 'application/json',
    'content-type': 'application/x-www-form-urlencoded',
  };

  const reqbody = 'grant_type=password&user_id=USER&password=PASSWORD&client_id=CLIENT';

  const resbody = {
    access_token: 'token', // eslint-disable-line camelcase
    organizer_key: 'organizer', // eslint-disable-line camelcase
    expires_in: '100', // eslint-disable-line camelcase
  };

  nock(apiBase, { reqheaders })
    .post('/oauth/access_token', reqbody)
    .reply(status, resbody);
}

describe('webinar-registration-service/authenticate', () => {
  process.env.GOTOWEBINAR_USER_ID = 'USER';
  process.env.GOTOWEBINAR_PASSWORD = 'PASSWORD';
  process.env.GOTOWEBINAR_CLIENT_ID = 'CLIENT';

  describe('getApiCredentials', () => {
    it('invokes API when no creds are cached', () => {
      expectHttpRequest(200);

      const credsManager = new ApiCredentialsManager();

      return expect(credsManager.getApiCredentials()).to.eventually.deep.equal({
        accessToken: 'token',
        organizerKey: 'organizer',
      });
    });

    it('uses cached creds', () => {
      const credsManager = new ApiCredentialsManager();
      credsManager.storedAccessToken = 'token';
      credsManager.storedOrganizerKey = 'organizer';
      credsManager.storedCredsExpirationDate = Date.now() + 100;

      return expect(credsManager.getApiCredentials()).to.eventually.deep.equal({
        accessToken: 'token',
        organizerKey: 'organizer',
      });
    });

    it('requests new creds when cached ones are expired', () => {
      expectHttpRequest(200);

      const credsManager = new ApiCredentialsManager();
      credsManager.storedAccessToken = 'expired_token';
      credsManager.storedOrganizerKey = 'expired_organizer';
      credsManager.storedCredsExpirationDate = Date.now() - 100;

      return expect(credsManager.getApiCredentials()).to.eventually.deep.equal({
        accessToken: 'token',
        organizerKey: 'organizer',
      });
    });

    it('rejects when API call fails', () => {
      expectHttpRequest(500);

      const credsManager = new ApiCredentialsManager();

      return expect(credsManager.getApiCredentials()).to.be.rejected;
    });
  });
});
