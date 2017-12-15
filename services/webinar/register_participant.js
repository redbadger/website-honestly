// @flow

import { Headers } from 'node-fetch';

import { fetchWithBody, apiBase } from './http_client';

/**
 * Registers the specified participant in the specified webinar.
 *
 * @see https://goto-developer.logmeininc.com/content/gotowebinar-api-reference#!/Registrants/createRegistrant
 */
export default function registerParticipant({
  firstName,
  lastName,
  email,
  organizerKey,
  webinarKey,
  accessToken,
}: {
  firstName: string,
  lastName: string,
  email: string,
  organizerKey: string,
  webinarKey: string,
  accessToken: string,
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

    throw new Error(
      `Failed to register participant to GoToWebinar. Response was:
      ${JSON.stringify(responseBody)}`,
    );
  });
}
