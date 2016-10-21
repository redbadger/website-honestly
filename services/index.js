import doPublish from './publish';
import doContactUs from './contact_us';
import doSignUp from './mailchimp/sign-up/index';
import doUpdateUser from './mailchimp/update-user/index';

export function publish(event, context, cb) {
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
