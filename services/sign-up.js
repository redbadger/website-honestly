/* eslint-disable no-console */
import fetch from 'node-fetch';
import md5 from 'md5';
import { formatResponse } from './sign-up/index';

export default function signUp(event, cb) {
  let fullName = [];
  if (event.body.name) {
    fullName = event.body.name.split(' ');
  }
  const data = {
    email_address: event.body.email_address,
    status: 'subscribed',
    merge_fields: {
      FNAME: fullName[0] || '',
      LNAME: fullName[fullName.length - 1] || '',
      COMPANY: event.body.company || '',
      ROLE: event.body.role || '',
    },
  };
  const username = '';
  const apiKey = process.env.MAILCHIMP_API_KEY;
  let link = 'https://us6.api.mailchimp.com/3.0/lists/2affe6fb11/members/';
  if (event.body.method === 'PATCH') {
    link += md5(data.email_address);
  }
  fetch(link,
    {
      method: event.body.method,
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Basic ' + new Buffer(username + ':' + apiKey).toString('base64'),
      },
      mode: 'cors',
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(json => {
      const result = formatResponse(json, data);
      cb(null, result);
    })
    .catch(err => {
      cb(err);
    });
}

