import actions from '../actions';
import { apiEndpoint } from '../../config';

const initialState = [];

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.FETCH_NEWS_SUCCESS:
      return action.news;
    case actions.FETCH_NEWS_FAIL:
      return [];
    default:
      return state;
  }
}

export function fetchSuccessful(news) {
  return {
    type: actions.FETCH_NEWS_SUCCESS,
    news: news.list,
  };
}

export function fetchFailure(error) {
  console.error(error); // eslint-disable-line no-console
  return {
    type: actions.FETCH_NEWS_FAIL,
  };
}

export const fetchNews = (fetch) => (
  (dispatch, getState) => {
    const news = getState().news;

    if (news && news.length > 0) {
      return Promise.resolve(news);
    }


    return fetch(`${apiEndpoint}/news`)
      .then(newsData =>
        dispatch(fetchSuccessful(newsData)))
      .catch(e =>
        dispatch(fetchFailure(e)));
  }
);
