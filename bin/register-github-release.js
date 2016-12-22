#!/usr/bin/env node
/* eslint-disable no-console */

const fetch = require('node-fetch');

const environment = process.argv[2];
if (environment === 'live') {
  console.log(`Tracking release to ${environment} environment.`);
} else {
  console.log(`Skipping release tracking for ${environment} environment.`);
  return;
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

const baseUrl = 'https://api.github.com/repos/redbadger/website-honestly';

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

const parseJson = blob => blob.json();

const getLatestRelease = () => (
  fetch(baseUrl + '/releases/latest', {
    method: 'GET',
    headers,
  })
  .then(assertStatusOK)
  .then(parseJson)
  .then(release => release.tag_name)
);

const formatCommit = commit => '* ' + commit.split('\n')[0];

const getCommits = (from, to) => (
  fetch(baseUrl + `/compare/${from}...${to}`, {
    method: 'GET',
    headers,
  })
  .then(assertStatusOK)
  .then(parseJson)
  .then(response => response.commits.map(c => formatCommit(c.commit.message)))
);

const registerRelease = commits => (
  fetch(baseUrl + '/releases', {
    method: 'POST',
    headers,
    body: JSON.stringify({
      name: 'Deployment @ ' + new Date().toString().split(' GMT')[0],
      tag_name: Date.now().toString(),
      body: commits.join('\n'),
    }),
  })
  .then(assertStatusOK)
  .then(parseJson)
);

getLatestRelease()
  .then(rel => getCommits(rel, 'master'))
  .then(commits => registerRelease(commits))
  .catch(e => {
    console.error('ERROR', e);
    process.exit(1);
  });
