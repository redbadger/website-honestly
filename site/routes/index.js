import React from 'react';

import L from '../layout';
import HomePage from '../pages/home';
import NotFoundPage from '../pages/not-found';

export default function routes() {
  return [
    {
      key: 'homePage',
      route: '',
      component: () => <L><HomePage /></L>,
    },
    {
      key: 'notFoundPage',
      route: '404',
      component: () => <L><NotFoundPage /></L>,
    },
  ];
}
