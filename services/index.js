import bugsnag from 'bugsnag';

// import doPublish from './publish';
import doContactUs from './contact_us';
import doSignUp from './mailchimp/sign-up/index';
import doUpdateUser from './mailchimp/update-user/index';

console.log('Registering bugsnag with ', process.env.BUGSNAG_KEY); // eslint-disable-line no-console
bugsnag.register(process.env.BUGSNAG_KEY);
bugsnag.configure({
  autoNotifyUncaught: true,
  releaseStage: process.env.ENV,
});

const cbWithErrorHandling = cb => (e, body) => {
  if (e) {
    bugsnag.notify(e, (bse, response) => {
      console.error('Error tracking:', bse, response, process.env.ENV); // eslint-disable-line no-console
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

  errorHandlerWrapper(() => { throw new Error('Hi Becca'); })(event, context, cb);
}

export const contactUs = errorHandlerWrapper(doContactUs);

export const signUp = errorHandlerWrapper(doSignUp);

export const updateUser = errorHandlerWrapper(doUpdateUser);
