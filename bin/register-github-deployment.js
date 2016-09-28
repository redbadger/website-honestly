#!/usr/bin/env node
/* eslint-disable no-console */

const fetch = require('node-fetch');

const ref = process.argv[2];

if (!ref) {
  console.log('Ref not passed as argv');
  process.exit(1);
}

const env = key => {
  const value = process.env[key];
  if (value) { return value; }
  console.error(`env var ${key} not set`);
  process.exit(1);
};

const environment = env('ENVIRONMENT_NAME');
const gitHubUsername = env('GITHUB_USERNAME');
const gitHubToken = env('GITHUB_TOKEN');
const targetUrl = `http://rb-website-honestly--${environment}.s3-website-eu-west-1.amazonaws.com/${ref}/`;
const environmentUrl = targetUrl;

const creds = `${gitHubUsername}:${gitHubToken}`;
const auth = new Buffer(creds).toString('base64');
const headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
  Authorization: `Basic ${auth}`,
};

const deploymentsUrl =
  'https://api.github.com/repos/redbadger/website-honestly/deployments';

const assertStatusOK = response => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  console.error(`Expected HTTP status to be OK. Was ${response.status} ${response.statusText}`);
  process.exit(1);
};

const registerDeployment = () =>
  fetch(deploymentsUrl, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      auto_merge: false,
      environment: `Preview [${ref}]`,
      required_contexts: [],
      ref,
    }),
  });

const addDeploymentLink = args =>
  fetch(`${deploymentsUrl}/${args.id}/statuses`, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      target_url: targetUrl,
      environment_url: environmentUrl,
      state: 'success',
    }),
  });

const parseJson = blob => blob.json();

registerDeployment()
  .then(assertStatusOK)
  .then(parseJson)
  .then(addDeploymentLink)
  .then(assertStatusOK)
  .then(parseJson)
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
