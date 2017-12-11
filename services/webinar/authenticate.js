// @flow

import { Headers } from 'node-fetch';
import querystring from 'querystring';

import { fetchWithBody, apiBase } from './utils';

function parseExpirationDate(expiresIn: string): number {
  const secondsFromNow = parseInt(expiresIn, 10);
  const millisFromNow = secondsFromNow * 1000;
  const expirationDate = Date.now() + millisFromNow;

  // Let creds expire 1 hour earlier to account for delays.
  return expirationDate - 3600000;
}

interface ApiCredentials {
  accessToken: string;
  organizerKey: string;
}

export default class ApiCredentialsManager {
  storedAccessToken: string;
  storedOrganizerKey: string;
  storedCredsExpirationDate: number;

  getApiCredentials(): Promise<ApiCredentials> {
    if (this.storedAccessToken === undefined || this.storedCredsExpirationDate < Date.now()) {
      const url = `${apiBase}/oauth/access_token`;

      const headers = new Headers();
      headers.append('Accept', 'application/json');
      headers.append('Content-Type', 'application/x-www-form-urlencoded');

      const body = querystring.stringify({
        grant_type: 'password', // eslint-disable-line camelcase
        user_id: process.env.GOTOWEBINAR_USER_ID, // eslint-disable-line camelcase
        password: process.env.GOTOWEBINAR_PASSWORD,
        client_id: process.env.GOTOWEBINAR_CLIENT_ID, // eslint-disable-line camelcase
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

        throw new Error(JSON.stringify(responseBody));
      });
    }

    return Promise.resolve({
      accessToken: this.storedAccessToken,
      organizerKey: this.storedOrganizerKey,
    });
  }
}
