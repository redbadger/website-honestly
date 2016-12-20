#!/usr/bin/env node
/* eslint-disable no-console */

const fetch = require('node-fetch');

if (process.argv[2] !== 'live') {
  console.log('Skipping release tracking for non-production environment.');
}

const env = key => {
  const value = process.env[key];
  if (value) { return value; }
  console.error(`env var ${key} not set`);
  process.exit(1);
};

const gitHubUsername = env('GITHUB_USERNAME');
const gitHubToken = env('GITHUB_TOKEN');

const creds = `${gitHubUsername}:${gitHubToken}`;
const auth = new Buffer(creds).toString('base64');
const headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
  Authorization: `Basic ${auth}`,
};

const deploymentsUrl =
  'https://api.github.com/repos/redbadger/website-honestly/releases';

const assertStatusOK = response => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  return response.json().then(json => {
    console.error(`Expected HTTP status to be OK. Was ${response.status} ${response.statusText}`);
    console.error(json);
    process.exit(1);
  });
};

const registerRelease = () =>
  fetch(deploymentsUrl, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      name: 'Deployment @ ' + new Date().toString().split(' GMT')[0],
      tag_name: Date.now().toString(),
    }),
  });

const parseJson = blob => blob.json();

registerRelease()
  .then(assertStatusOK)
  .then(parseJson)
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
