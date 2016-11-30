import paramCase from 'param-case';

const handleErrors = (response) => {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export default class Workable {
  constructor(fetch, key) {
    this.fetch = fetch;
    this.key = key;
  }

  getJobs() {
    const jobsUrl = 'https://www.workable.com/spi/v3/accounts/redbadger/jobs?include_fields=description,benefits,requirements&state=published';

    return this.fetch(jobsUrl, {
      headers: {
        authorization: `Bearer ${this.key}`,
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
    })));
  }
}
