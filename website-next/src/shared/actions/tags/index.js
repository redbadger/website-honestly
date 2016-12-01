import actions from '../actions';
import { apiEndpoint } from '../../config';
import { fetchSuccessful as fetchEventsSuccessful } from '../events';
import { fetchSuccessful as fetchNewsSuccessful } from '../news';

export function fetchFailure(error) {
  return {
    type: actions.FETCH_TAGS_FAIL,
    error,
  };
}

export const fetchTags = (fetch) => (
  (dispatch, getState) => {
    const events = getState().events;
    const news = getState().news;

    if (events && events.length > 0 && news && news.length > 0) {
      return Promise.resolve({
        events,
        news,
      });
    }

    return fetch(`${apiEndpoint}/tags`)
      // eslint-disable-next-line no-shadow
      .then(tags => {
        dispatch(fetchEventsSuccessful(tags.events));
        return dispatch(fetchNewsSuccessful(tags.news));
      })
      .catch(e => dispatch(fetchFailure(e)));
  }
);
