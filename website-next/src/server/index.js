if (process.env.NEWRELIC_LICENSE) {
   require('newrelic'); // eslint-disable-line
}

import * as config from './config';
import createApi from './api';
import express from 'express';
import fetch from '../shared/util/fetch-proxy';
import WorkableAPI from './api/workable';
import router from './router';
import enableDocumentPreview from './preview';

const app = enableDocumentPreview(express());
const workable = new WorkableAPI(fetch(), config.workable.key);

app.use(express.static('static'));

app.use('/assets', express.static('build/assets'));

app.use('/api', createApi(workable));

app.use(router);

if (!config.hot) {
  app.listen(config.port, () => {
    console.log('Server listening on port', config.port);
  });
}

export default app;
