import bugsnag from 'bugsnag';

import doPublish from './publish';

bugsnag.register(process.env.BUGSNAG_KEY);
bugsnag.configure({
  autoNotifyUncaught: true,
  releaseStage: process.env.ENV,
});

const cbWithErrorHandling = cb => (e, body) => {
  if (e) {
    bugsnag.notify(e, () => {
      e.message = `[500] ${e.message}`.replace(/\n/g, ''); // eslint-disable-line no-param-reassign
      return cb(e);
    });
  } else {
    return cb(null, body);
  }
};

const errorHandlerWrapper = f => (event, context, cb) => {
  try {
    f(event, context, cbWithErrorHandling(cb));
  } catch (e) {
    cbWithErrorHandling(cb)(e);
  }
};

export function publish(event, context, cb) {
  if (event.query && event.query.auth_token !== process.env.PRIVATE_LAMBDA_API_KEY) {
    return cb(new Error('[403] Forbidden'));
  }

  errorHandlerWrapper(doPublish)(event, context, cb);
}
