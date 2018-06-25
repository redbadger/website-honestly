// @flow

import { Headers } from 'node-fetch';
import querystring from 'querystring';

import { fetchWithBody, apiBase } from './http_client';

export function parseExpirationDate(expiresIn: string): number {
  const secondsFromNow = parseInt(expiresIn, 10);
  const millisFromNow = secondsFromNow * 1000;
  const expirationDate = Date.now() + millisFromNow;

  // Let creds expire 1 hour earlier to account for delays.
  return expirationDate - 3600000;
}

interface AuthParams {
  userId: string;
  password: string;
  clientId: string;
}

interface ApiCredentials {
  accessToken: string;
  organizerKey: string;
}

export default class ApiCredentialsManager {
  params: AuthParams;
  storedAccessToken: string;
  storedOrganizerKey: string;
  storedCredsExpirationDate: number;

  constructor(params: AuthParams) {
    this.params = params;
  }

  /**
   * Gets credentials to talk to the GoToWebinar API. Credentials are
   * cached in memory until their expiration date, at which point
   * new credentials will be requested.
   *
   * @see https://goto-developer.logmeininc.com/how-use-direct-login
   */
  getApiCredentials(): Promise<ApiCredentials> {
    if (this.storedAccessToken === undefined || this.storedCredsExpirationDate < Date.now()) {
      const url = `${apiBase}/oauth/access_token`;

      const headers = new Headers();
      headers.append('Accept', 'application/json');
      headers.append('Content-Type', 'application/x-www-form-urlencoded');

      const body = querystring.stringify({
        grant_type: 'password', // eslint-disable-line camelcase
        user_id: this.params.userId, // eslint-disable-line camelcase
        password: this.params.password,
        client_id: this.params.clientId, // eslint-disable-line camelcase
      });

      return fetchWithBody(url, {
        method: 'POST',
        headers,
        body,
      }).then(({ response, responseBody }) => {
        if (response.status === 200) {
          this.storedAccessToken = responseBody.access_token;
          this.storedOrganizerKey = responseBody.organizer_key;
          this.storedCredsExpirationDate = parseExpirationDate(responseBody.expires_in);

          return {
            accessToken: this.storedAccessToken,
            organizerKey: this.storedOrganizerKey,
          };
        }

        throw new Error(
          `Authentication against GoToWebinar failed. Response was: ${JSON.stringify(
            responseBody,
          )}`,
        );
      });
    }

    return Promise.resolve({
      accessToken: this.storedAccessToken,
      organizerKey: this.storedOrganizerKey,
    });
  }
}
