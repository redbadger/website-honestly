import doPublish from './publish';
import doContactUs from './contact_us';

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
