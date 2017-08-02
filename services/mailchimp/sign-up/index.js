/* eslint-disable no-console */

import { mailchimpApi, formatFormInput, formatSignUpResponse } from '../utilities';

export default function signUp(event, _, cb) {
  console.log(event);
  const mailingListId = process.env.MAILING_LIST_ID;
  const body = formatFormInput(event);
  return mailchimpApi(
    `https://us6.api.mailchimp.com/3.0/lists/${mailingListId}/members/`,
    'POST',
    JSON.stringify(body)
  )
    .then(json => {
      console.log('sign up service post ok:', json);
      const result = formatSignUpResponse(json, body);
      cb(null, result);
    })
    .catch(err => {
      console.error('sign up service error:', err, err.stack);
      cb(err);
    });
}
