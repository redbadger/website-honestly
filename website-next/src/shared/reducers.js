import { combineReducers } from 'redux';
import { routeReducer } from 'react-router-redux';
import { reducer as contentAreas } from './actions/content-areas';
import jobs from './actions/jobs';
import event from './actions/events/event';
import events from './actions/events';
import newsItem from './actions/news/news-item';
import news from './actions/news';

const rootReducer = combineReducers({
  contentAreas,
  jobs,
  event,
  events,
  newsItem,
  news,
  routing: routeReducer,
});

export default rootReducer;
