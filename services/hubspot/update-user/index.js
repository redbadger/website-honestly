import { encodeData, dataToUserUpdate, hubspotPOST } from '../util';

const portalId = process.env.HUBSPOT_PORTAL_ID;
const updateFormId = process.env.HUBSPOT_NEWS_SIGN_UP_FORM_ID;

export default function hubspotUpdateUser(event, _, cb) {
  const body = encodeData(dataToUserUpdate(event.body));
  const url = `https://forms.hubspot.com/uploads/form/v2/${portalId}/${updateFormId}`;
  return hubspotPOST(url, body, cb);
}
