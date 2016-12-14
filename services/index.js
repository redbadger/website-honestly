import doPublish from './publish';
import doContactUs from './contact_us';
import doSignUp from './mailchimp/sign-up/index';
import doUpdateUser from './mailchimp/update-user/index';

const cbWithErrorHandling = cb => (e, body) => {
  if (e) {
    e.message = `[500] ${e.message}`.replace(/\n/g, ''); // eslint-disable-line no-param-reassign
    return cb(e);
  }
  return cb(null, body);
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

export const contactUs = errorHandlerWrapper(doContactUs);

export const signUp = errorHandlerWrapper(doSignUp);

export const updateUser = errorHandlerWrapper(doUpdateUser);
