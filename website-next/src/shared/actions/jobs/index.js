import actions from '../actions';
import { apiEndpoint } from '../../config';

const initialState = [];

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.FETCH_JOBS_SUCCESS:
      return action.jobs;
    case actions.FETCH_JOBS_FAIL:
      return [];
    default:
      return state;
  }
}

export function fetchSuccessful(jobs) {
  return {
    type: actions.FETCH_JOBS_SUCCESS,
    jobs,
  };
}

export function fetchFailure(error) {
  return {
    type: actions.FETCH_JOBS_FAIL,
    error,
  };
}

export const fetchJobs = (fetch) => (
  (dispatch, getState) => {
    const jobs = getState().jobs;

    if (jobs && jobs.length > 0) {
      return Promise.resolve(jobs);
    }

    return fetch(`${apiEndpoint}/jobs`)
      // eslint-disable-next-line no-shadow
      .then(jobs => dispatch(fetchSuccessful(jobs)))
      .catch(e => dispatch(fetchFailure(e)));
  }
);
