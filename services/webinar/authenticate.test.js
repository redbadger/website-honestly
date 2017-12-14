import { expect } from 'chai';
import nock from 'nock';
import lolex from 'lolex';

import { apiBase } from './http_client';
import ApiCredentialsManager, { parseExpirationDate } from './authenticate';

const authParams = {
  userId: 'USER',
  password: 'PASSWORD',
  clientId: 'CLIENT',
};

function expectHttpRequest(status) {
  const reqheaders = {
    accept: 'application/json',
    'content-type': 'application/x-www-form-urlencoded',
  };

  const reqbody = 'grant_type=password&user_id=USER&password=PASSWORD&client_id=CLIENT';

  const resbody = {
    access_token: 'token', // eslint-disable-line camelcase
    organizer_key: 'organizer', // eslint-disable-line camelcase
    expires_in: '10000', // eslint-disable-line camelcase
  };

  nock(apiBase, { reqheaders })
    .post('/oauth/access_token', reqbody)
    .reply(status, resbody);
}

describe('webinar-registration-service/authenticate', () => {
  let clock;

  beforeEach(() => {
    clock = lolex.install({
      now: 0,
    });
  });

  describe('parseExpirationDate', () => {
    it('should parse the specified seconds from now', () => {
      const result = parseExpirationDate('10000');
      expect(result).to.equal(6400000);
    });
  });

  describe('getApiCredentials', () => {
    it('invokes API when no creds are cached', async () => {
      expectHttpRequest(200);

      const credsManager = new ApiCredentialsManager(authParams);

      await expect(credsManager.getApiCredentials()).to.eventually.deep.equal({
        accessToken: 'token',
        organizerKey: 'organizer',
      });

      expect(credsManager.storedCredsExpirationDate).to.equal(6400000);
    });

    it('uses cached creds', () => {
      const credsManager = new ApiCredentialsManager(authParams);
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

      const credsManager = new ApiCredentialsManager(authParams);
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

      const credsManager = new ApiCredentialsManager(authParams);

      return expect(credsManager.getApiCredentials()).to.be.rejected;
    });
  });

  afterEach(() => {
    clock.uninstall();
  });
});
