import { mailchimpApi, formatFormInput, formatSignUpResponse } from '../utilities';

export default function signUp(event, cb) {
  const body = formatFormInput(event);
  return mailchimpApi(
    'https://us6.api.mailchimp.com/3.0/lists/2affe6fb11/members/',
    'POST',
    JSON.stringify(body)
  )
    .then(json => {
      const result = formatSignUpResponse(json, body);
      cb(null, result);
    })
    .catch(err => {
      cb(err);
    });
}
