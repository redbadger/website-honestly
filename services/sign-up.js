/* eslint-disable no-console */
import fetch from 'node-fetch';

export default function signUp(event, cb) {
  const data = {
    email_address: event.body.email_address,
    status: 'subscribed',
  };
  const username = '';
  const apiKey = process.env.MAILCHIMP_API_KEY;
  return new Promise((resolve, reject) => {
    fetch('https://us6.api.mailchimp.com/3.0/lists/2affe6fb11/members',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Basic ' + new Buffer(username + ':' + apiKey).toString('base64'),
        },
        mode: 'cors',
        body: JSON.stringify(data),
      })
      .then(response => response.json())
      .then(json => {
        cb(null, json);
        resolve();
      })
      .catch(err => {
        console.log('err', err);
        cb(err);
        reject();
      });
  });
}

