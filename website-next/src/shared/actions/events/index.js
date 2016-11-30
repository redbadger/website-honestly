import actions from '../actions';
import { apiEndpoint } from '../../config';

const initialState = [];

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.FETCH_EVENTS_SUCCESS:
      return action.events;
    case actions.FETCH_EVENTS_FAIL:
      return [];
    default:
      return state;
  }
}

export function fetchSuccessful(events) {
  return {
    type: actions.FETCH_EVENTS_SUCCESS,
    events: events.list,
  };
}

export function fetchFailure(error) {
  return {
    type: actions.FETCH_EVENTS_FAIL,
    error,
  };
}

export const fetchEvents = (fetch) => (
  (dispatch, getState) => {
    const events = getState().events;

    if (events && events.length > 0) {
      return Promise.resolve(events);
    }

    return fetch(`${apiEndpoint}/events`)
      .then(eventsData =>
        dispatch(fetchSuccessful(eventsData)))
      .catch(e => dispatch(fetchFailure(e)));
  }
);
