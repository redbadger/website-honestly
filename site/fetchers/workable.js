import paramCase from 'param-case';
import sanitizeHtml from 'sanitize-html';
import handleErrors from './handle-errors';

const jobsUrl =
  'https://www.workable.com/spi/v3/accounts/redbadger/jobs?include_fields=description,benefits,requirements&state=published';

export const getJobs = (fetch, key) =>
  fetch(jobsUrl, {
    headers: {
      authorization: `Bearer ${key}`,
      'Content-Type': 'application/json',
    },
    timeout: 10000,
  })
    .then(handleErrors)
    .then(response => response.json())
    .then(response => {
      if (response.jobs) {
        return response.jobs.map(job => ({
          title: job.title,
          description: sanitizeHtml(job.description),
          fullDescription: sanitizeHtml(job.description + job.requirements + job.benefits),
          applicationUrl: job.application_url,
          slug: paramCase(job.title),
        }));
      }
      // log errors to badgerbot
    });
