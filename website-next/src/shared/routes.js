/* eslint-disable max-len */

import React from 'react';
import Root from './containers/root';
import JoinUs from './containers/join-us';
import Job from './containers/job';
import Events from './containers/events';
import Tag from './containers/tag';
import Event from './containers/event';
import { Route } from 'react-router';
import HttpError from './util/http-error';
import News from './containers/news';
import NewsItem from './containers/news-item';
import './containers/error';

const routeFn = (store, args, ...children) => {
  if (args.component && args.component.fetchData) {
    // eslint-disable-next-line no-param-reassign
    args.onEnter = (nextState, replaceState, done) => {
      args.component
        .fetchData(store.dispatch, store.getState, nextState)
        .then((response) => {
          if (response && ((response instanceof HttpError) || response.error)) {
            done(response.error || response);
          } else {
            done();
          }
        });
    };
  }

  return (
    <Route key={args.path} {...args}>{children}</Route>
  );
};

export default function routes(store) {
  const route = routeFn.bind(null, store);
  return (
      route({ component: Root, path: '/' },
      route({ component: JoinUs, path: '/about-us/join-us' }),
      route({ component: Job, path: '/about-us/join-us/:id' }),
      route({ component: Events, path: '/about-us/events' }),
      route({ component: Event, path: '/about-us/events/:year/:month/:day/:slug' }),
      route({ component: Tag, path: '/tags/:tag' }),
      route({ component: News, path: '/about-us/news' }),
      route({ component: NewsItem, path: '/about-us/news/:year/:month/:day/:slug' }),
    )
  );
}
