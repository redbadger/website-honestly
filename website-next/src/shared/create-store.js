import reducers from './reducers';
import { createStore, applyMiddleware } from 'redux';
import { syncHistory } from 'react-router-redux';
import thunk from 'redux-thunk';
import { env } from './config';

export default (history, initialState) => {
  const reduxRouterMiddleware = syncHistory(history);

  if (env === 'development') {
    return applyMiddleware(thunk, reduxRouterMiddleware)(createStore)(reducers, initialState, typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f);
  }

  return applyMiddleware(thunk, reduxRouterMiddleware)(createStore)(reducers, initialState);
};
