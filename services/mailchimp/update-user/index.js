/* eslint-disable no-console */
import { mailchimpApi, formatUpdateResponse, formatFormInput } from '../utilities';

function md5(str) {
  return crypto
    .createHash('md5')
    .update(str)
    .digest('hex');
}

export default function doUpdateUser(event, _, cb) {
  const mailingListId = process.env.MAILING_LIST_ID;
  const body = formatFormInput(event, true);
  const emailAddress = body.email_address.toLowerCase();
  const link =
    `https://us6.api.mailchimp.com/3.0/lists/${mailingListId}/members/` + md5(emailAddress);
  return mailchimpApi(link, 'PATCH', JSON.stringify(body))
    .then(json => {
      console.log('updateUser request:', JSON.stringify(body, true, '..'));

      const result = formatUpdateResponse(json, body);
      cb(null, result);
    })
    .catch(err => {
      cb(err);
    });
}
