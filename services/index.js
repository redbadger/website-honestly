import doPublish from './publish';
import doContactUs from './contact_us';
import doSignUp from './mailchimp/sign-up/index';
import doUpdateUser from './mailchimp/update-user/index';

export function publish(event, context, cb) {
  if (event.query && event.query.auth_token !== process.env.PRIVATE_LAMBDA_API_KEY) {
    return cb(new Error('[403] Forbidden'));
  }

  try {
    doPublish(cb);
  } catch (e) {
    cb(e);
  }
}

export function contactUs(event, context, cb) {
  try {
    doContactUs(event, cb);
  } catch (e) {
    cb(e);
  }
}

export function signUp(event, context, cb) {
  try {
    doSignUp(event, cb);
  } catch (e) {
    cb(e);
  }
}

export function updateUser(event, context, cb) {
  try {
    doUpdateUser(event, cb);
  } catch (e) {
    cb(e);
  }
}
