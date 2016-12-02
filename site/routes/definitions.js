export const routeDefinitions = [
  {
    title: () => 'Home',
    key: 'homePage',
    route: '',
  },
  {
    title: () => 'Not found',
    key: 'notFoundPage',
    route: '404',
  },
  {
    title: () => 'Server error',
    key: 'serverErrorPage',
    route: '50x',
  },
  {
    title: () => 'What we do',
    key: 'whatWeDoPage',
    route: 'what-we-do',
  },
  {
    title: () => 'Join us',
    key: 'joinUs',
    route: 'about-us/join-us',
    stateToProps: ({ jobs }) => ({ jobs }),
  },
  {
    title: job => job.title,
    key: 'job',
    route: 'about-us/join-us/{slug}',
    stateToProps: (state, slug) => ({ job: state.job[slug] }),
    gen: state => Object.keys(state.job),
  },
];
