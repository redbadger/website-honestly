/* eslint-disable no-console */

import ApiCredentialsManager from './webinar/authenticate';
import registerParticipant from './webinar/register_participant';

const credsManager = new ApiCredentialsManager({
  userId: process.env.GOTOWEBINAR_USER_ID,
  password: process.env.GOTOWEBINAR_PASSWORD,
  clientId: process.env.GOTOWEBINAR_CLIENT_ID,
});

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
