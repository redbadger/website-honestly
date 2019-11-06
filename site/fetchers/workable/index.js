// @flow

import fetch from 'node-fetch';
import paramCase from 'param-case';
import sanitizeHtml from 'sanitize-html';

import handleErrors from '../util/handle-errors';

const jobsUrl =
  'https://redbadger.workable.com/spi/v3/jobs?include_fields=description,benefits,requirements&state=published';

const normalizeJobs = jobs => {
  return jobs.map(job => ({
    id: job.id,
    title: job.title,
    department: job.department,
    description: sanitizeHtml(job.description),
    fullDescription: sanitizeHtml(job.description + job.requirements + job.benefits),
    applicationUrl: job.application_url,
    slug: paramCase(job.title),
    datePosted: job.created_at,
  }));
};

export const getJobs = (key: string) => {
  return fetch(jobsUrl, {
    headers: {
      authorization: `Bearer ${key}`,
      'Content-Type': 'application/json',
    },
    timeout: 10000,
  })
    .then(handleErrors)
    .then(response => {
      return response.json();
    })
    .then(response => normalizeJobs(response.jobs))
    .catch(error => {
      return error;
    });
};
