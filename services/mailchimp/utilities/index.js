/* eslint-disable no-console */
import fetch from 'node-fetch';
import crypto from 'crypto';

const algorithm = 'aes256';
const key = process.env.SECRET_ENCRYPTION_KEY;

export function encryptText(text) {
  const cipher = crypto.createCipher(algorithm, key);
  return cipher.update(text, 'utf8', 'hex') + cipher.final('hex');
}

export function decryptText(text) {
  const decipher = crypto.createDecipher(algorithm, key);
  return decipher.update(text, 'hex', 'utf8') + decipher.final('utf8');
}

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

export function formatSignUpResponse(res) {
  let encryptedEmail = '';
  // No email_address is returned from mailchimp if there is an error on their side
  if (res.email_address) {
    encryptedEmail = encryptText(res.email_address);
  }
  const defaultResponse = {
    newsletterSubmitted: false,
    updatedFormSubmitted: false,
    errorMessage: '',
    email_address: encryptedEmail,
  };
  // There was an error signing up the user
  if (res.status === 400) {
    defaultResponse.errorMessage = 'This email address has already signed up';
    return defaultResponse;
  }
  return {
    newsletterSubmitted: true,
    updatedFormSubmitted: false,
    errorMessage: '',
    email_address: encryptedEmail,
  };
}

export function formatUpdateResponse(res, data) {
  const defaultResponse = {
    newsletterSubmitted: false,
    updatedFormSubmitted: false,
    errorMessage: '',
    email_address: res.email_address,
  };
  // The user has signed up previously and is now updating their details
  if (res.last_changed !== res.timestamp_opt && data.merge_fields.FNAME !== '') {
    defaultResponse.updatedFormSubmitted = true;
    defaultResponse.newsletterSubmitted = true;
    return defaultResponse;
  }
  return defaultResponse;
}

export function formatFormInput(event, isEmailEncrypted) {
  let emailAddress = event.body.email_address;
  if (isEmailEncrypted) {
    emailAddress = decryptText(event.body.email_address);
  }
  return {
    email_address: emailAddress,
    status: 'subscribed',
    merge_fields: {
      FNAME: event.body.name || '',
      LNAME: event.body.surname || '',
      COMPANY: event.body.company || '',
      ROLE: event.body.role || '',
    },
  };
}
