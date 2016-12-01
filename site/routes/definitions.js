export const routeDefinitions = [
  {
    title: 'Home',
    key: 'homePage',
    route: '',
  },
  {
    title: 'What we do',
    key: 'whatWeDoPage',
    route: 'what-we-do',
  },
  {
    title: 'Join us',
    key: 'joinUs',
    route: 'test-about-us/join-us',
    stateToProps: ({ jobs }) => ({ jobs }),
  },
  {
    title: ({ job }) => job.title,
    key: 'job',
    route: 'test-about-us/join-us/{slug}',
    stateToProps: (state, slug) => ({ job: state.job[slug] }),
    gen: state => Object.keys(state.job || {}),
  },
  {
    title: 'Not found',
    key: 'notFoundPage',
    route: '404',
  },
  {
    title: 'Server error',
    key: 'serverErrorPage',
    route: '50x',
  },
  {
    title: 'Lost connection',
    key: 'offlinePage',
    route: 'offline',
  },
];
