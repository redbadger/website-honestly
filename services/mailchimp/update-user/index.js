import md5 from 'md5';
import { mailchimpApi, formatResponse, formatFormInput } from '../utilities';

export default function doUpdateUser(event, cb) {
  const body = formatFormInput(event, true);
  const link = 'https://us6.api.mailchimp.com/3.0/lists/2affe6fb11/members/' + md5(body.email_address);
  return mailchimpApi(
    link,
    'PATCH',
    JSON.stringify(body)
  )
    .then(json => {
      const result = formatResponse(json, body);
      cb(null, result);
    })
    .catch(err => {
      cb(err);
    });
}

