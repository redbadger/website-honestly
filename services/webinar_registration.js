/* eslint-disable no-console */

import fetch, { Headers } from 'node-fetch';
import querystring from 'querystring';

const apiBase = 'https://api.getgo.com';

let storedAccessToken = null;
let storedOrganizerKey = null;
let storedCredsExpirationDate = null;

function parseExpirationDate(expiresIn) {
  const secondsFromNow = parseInt(expiresIn, 10);
  const millisFromNow = secondsFromNow * 1000;
  const expirationDate = Date.now() + millisFromNow;

  // Let creds expire 1 hour earlier to account for delays.
  return expirationDate - 3600000;
}

function fetchWithBody(url, init) {
  return fetch(url, init).then(response => {
    return response.json().then(responseBody => ({
      response,
      responseBody,
    }));
  });
}

function getApiCredentials() {
  if (storedAccessToken === null || storedCredsExpirationDate < Date.now()) {
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
        storedAccessToken = responseBody.access_token;
        storedOrganizerKey = responseBody.organizer_key;
        storedCredsExpirationDate = parseExpirationDate(responseBody.expires_in);

        return {
          accessToken: storedAccessToken,
          organizerKey: storedOrganizerKey,
        };
      }

      throw new Error(JSON.stringify(responseBody));
    });
  }

  return Promise.resolve({
    accessToken: storedAccessToken,
    organizerKey: storedOrganizerKey,
  });
}

function registerParticipant({
  firstName,
  lastName,
  email,
  organizerKey,
  webinarKey,
  accessToken,
}) {
  const url = `${apiBase}/G2W/rest/organizers/${organizerKey}/webinars/${webinarKey}/registrants`;
  const query = '?resendConfirmation=true';

  const headers = new Headers();
  headers.append('Accept', 'application/vnd.citrix.g2wapi-v1.1+json');
  headers.append('Authorization', accessToken);
  headers.append('Content-Type', 'application/json');

  return fetchWithBody(url + query, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      firstName,
      lastName,
      email,
    }),
  }).then(({ response, responseBody }) => {
    if (response.status === 201 || response.status === 409) {
      return responseBody;
    }

    throw new Error(JSON.stringify(responseBody));
  });
}

export default function doRegisterForWebinar(event, _, cb) {
  getApiCredentials()
    .then(creds =>
      registerParticipant({
        firstName: event.body.firstName,
        lastName: event.body.lastName,
        email: event.body.email,
        webinarKey: event.body.webinarKey,
        organizerKey: creds.organizerKey,
        accessToken: creds.accessToken,
      }),
    )
    .then(result => cb(null, result))
    .catch(err => {
      console.error(err);
      cb(err);
    });
}
