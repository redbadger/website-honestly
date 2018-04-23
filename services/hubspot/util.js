/* eslint-disable no-console */
import fetch from 'node-fetch';

export function encodeData(data) {
  return Object.keys(data)
    .map(key => {
      const val = data[key];
      return `${encodeURIComponent(key)}=${encodeURIComponent(val)}`;
    })
    .join('&');
}

export function dataToUserUpdate(data) {
  return {
    email: data.email,
    firstname: data.firstname,
    lastname: data.lastname,
    // eslint-disable-next-line camelcase
    hs_context: JSON.stringify({
      hutk: data.hutk,
      pageUrl: data.pageUrl,
      pageName: data.pageName,
    }),
  };
}

export function dataToSignUp(data) {
  return {
    email: data.email,
    // eslint-disable-next-line camelcase
    hs_context: JSON.stringify({
      hutk: data.hutk,
      pageUrl: data.pageUrl,
      pageName: data.pageName,
    }),
  };
}

export function hubspotPOST(url, body, cb) {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    mode: 'cors',
    body,
  })
    .then(res => {
      console.log('Sign up request status code:', res.status);
      cb(null);
    })
    .catch(err => {
      console.error('Sign up service error:', err, err.stack);
      cb(err);
    });
}
