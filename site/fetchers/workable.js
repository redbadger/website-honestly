import paramCase from 'param-case';
import handleErrors from './handle-errors';

const jobsUrl = 'https://www.workable.com/spi/v3/accounts/redbadger/jobs?include_fields=description,benefits,requirements&state=published';

export const getJobs = (fetch, key) => (
  fetch(jobsUrl, {
    headers: {
      authorization: `Bearer ${key}`,
      'Content-Type': 'application/json',
    },
  })
  .then(handleErrors)
  .then(response => response.json())
  .then(response => response.jobs.map(job => ({
    title: job.title,
    description: job.description,
    fullDescription: job.description + job.requirements + job.benefits,
    applicationUrl: job.application_url,
    slug: paramCase(job.title),
  })))
);
