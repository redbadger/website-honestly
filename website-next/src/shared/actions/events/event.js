import actions from '../actions';
import { fetchEvents } from './';
import { apiEndpoint } from '../../config';
import HttpError from '../../util/http-error';

const initialState = {};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.FETCH_EVENT_SUCCESS:
      return action.event;
    case actions.FETCH_EVENT_FAIL:
      return {};
    default:
      return state;
  }
}

export function fetchSuccessful(event) {
  return {
    type: actions.FETCH_EVENT_SUCCESS,
    event,
  };
}

export function fetchFailure(error) {
  return {
    type: actions.FETCH_EVENT_FAIL,
    error,
  };
}

export const fetchEvent = (fetch) => (
  (dispatch, getState, nextState) => {
    const storedEvent = getState().event;

    if (storedEvent && Object.keys(storedEvent).length > 0) {
      return Promise.resolve(storedEvent);
    }

    const { location } = nextState;
    const { id, token } = location ? location.query : {};

    if (id && token) {
      return fetch(`${apiEndpoint}/event/${id}?token=${token}`)
        .then((event) => dispatch(fetchSuccessful(event)))
        .catch((error) => dispatch(fetchFailure(error)));
    }

    return fetchEvents(fetch)(dispatch, getState)
      .then(() => { // eslint-disable-line consistent-return
        const event = getState().events.find(j =>
          j.slug.toUpperCase() === nextState.params.slug.toUpperCase()
        );
        if (event) {
          dispatch(fetchSuccessful(event));
        } else {
          const error = new HttpError(404);
          dispatch(fetchFailure(error));
          return { error };
        }
      });
  }
);
