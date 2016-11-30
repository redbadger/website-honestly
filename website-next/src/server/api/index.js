import express from 'express';
import JobsController from './controllers/jobs';
import {
  getEvent,
  getEvents,
  getNews,
  getNewsItem,
  getTags,
} from './controllers/eventsNews';
import bodyParser from 'body-parser';

export default function createApi(workable) {
  const api = express();
  const jobsController = new JobsController(workable);

  api.use(bodyParser.json());
  api.use(bodyParser.urlencoded({ extended: true }));

  api.get('/jobs', jobsController.getJobs);
  api.get('/event/:id', getEvent);
  api.get('/events', getEvents);
  api.get('/news', getNews);
  api.get('/news/:id', getNewsItem);
  api.get('/tags', getTags);

  return api;
}
