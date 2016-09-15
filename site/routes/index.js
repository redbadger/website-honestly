import React from 'react';
import { IndexRoute, Route, Router, browserHistory } from 'react-router';

import Layout from '../layout';
import HomePage from '../pages/home';
import NotFoundPage from '../pages/not-found';

export default function routes() {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={Layout}>
        <IndexRoute component={HomePage} />
        <Route path="*" component={NotFoundPage} />
      </Route>
    </Router>
  );
}
