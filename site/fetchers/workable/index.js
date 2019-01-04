// @flow

import fetch from 'node-fetch';
import paramCase from 'param-case';
import sanitizeHtml from 'sanitize-html';

import handleErrors from '../util/handle-errors';

const jobsUrl =
  'https://www.workable.com/spi/v3/accounts/redbadger/jobs?include_fields=description,benefits,requirements&state=published';

export const getJobs = (key: string) =>
  fetch(jobsUrl, {
    headers: {
      authorization: `Bearer ${key}`,
      'Content-Type': 'application/json',
    },
    timeout: 10000,
  })
    .then(handleErrors)
    .then(response => response.json())
    .then(response =>
      response.jobs.map(job => ({
        title: job.title,
        description: sanitizeHtml(job.description),
        fullDescription: sanitizeHtml(job.description + job.requirements + job.benefits),
        applicationUrl: job.application_url,
        slug: paramCase(job.title),
      })),
    )
    .catch(error => error);
