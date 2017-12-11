/* eslint-disable no-console */

import ApiCredentialsManager from './webinar/authenticate';
import { registerParticipant } from './webinar/api';

const credsManager = new ApiCredentialsManager();

export default function doRegisterForWebinar(event, _, cb) {
  credsManager
    .getApiCredentials()
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
