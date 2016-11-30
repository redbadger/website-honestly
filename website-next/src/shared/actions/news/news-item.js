import actions from '../actions';
import { fetchNews } from './';
import { apiEndpoint } from '../../config';
import HttpError from '../../util/http-error';

const initialState = {};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.FETCH_NEWS_ITEM_SUCCESS:
      return action.news;
    case actions.FETCH_NEWS_ITEM_FAIL:
      return {};
    default:
      return state;
  }
}

export function fetchSuccessful(news) {
  return {
    type: actions.FETCH_NEWS_ITEM_SUCCESS,
    news,
  };
}

export function fetchFailure(error) {
  return {
    type: actions.FETCH_NEWS_ITEM_FAIL,
    error,
  };
}

export const fetchNewsItem = (fetch) => (
  (dispatch, getState, nextState) => {
    const { location } = nextState;
    const { id, token } = location ? location.query : {};

    if (id && token) {
      return fetch(`${apiEndpoint}/news/${id}?token=${token}`)
        // eslint-disable-next-line no-shadow
        .then((news) => dispatch(fetchSuccessful(news)))
        .catch((error) => dispatch(fetchFailure(error)));
    }

    return fetchNews(fetch)(dispatch, getState)
      .then(() => { // eslint-disable-line consistent-return
        const news = getState().news.find(j =>
          j.slug.toUpperCase() === nextState.params.slug.toUpperCase()
        );
        if (news) {
          dispatch(fetchSuccessful(news));
        } else {
          const error = new HttpError(404);
          dispatch(fetchFailure(error));
          return { error };
        }
      });
  }
);
