/* eslint-disable no-console */
import fetch from 'node-fetch';

export function mailchimpApi(link, method, body) {
  const username = '';
  const apiKey = process.env.MAILCHIMP_API_KEY;
  return fetch(link,
    {
      method,
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Basic ' + new Buffer(username + ':' + apiKey).toString('base64'),
      },
      mode: 'cors',
      body,
    })
    .then(response => response.json());
}

export function formatResponse(res, data) {
  const response = {
    newsletterSubmitted: false,
    updatedFormSubmitted: false,
    errorMessage: '',
    email_address: res.email_address,
  };
  // There was an error signing up the user
  if (res.status === 400) {
    response.errorMessage = res.detail;
    return response;
  }
  // The user has signed up previously and is now updating their details
  if (res.last_changed !== res.timestamp_opt && data.merge_fields.FNAME !== '') {
    response.updatedFormSubmitted = true;
    response.newsletterSubmitted = true;
    return response;
  }
  // There were no errors and a new user has been subscribed to the list
  return {
    newsletterSubmitted: true,
    updatedFormSubmitted: false,
    errorMessage: '',
    email_address: res.email_address,
  };
}

export function formatFormInput(event) {
  let fullName = [];
  if (event.body.name) {
    fullName = event.body.name.split(' ');
  }
  return {
    email_address: event.body.email_address,
    status: 'subscribed',
    merge_fields: {
      FNAME: fullName[0] || '',
      LNAME: fullName[fullName.length - 1] || '',
      COMPANY: event.body.company || '',
      ROLE: event.body.role || '',
    },
  };
}
