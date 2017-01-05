// @flow

type RouteDefinition = {
  title: string | (props: Object) => string,
  key: string,
  route: string,
  stateToProps?: (state: Object, params?: Object) => any,
  gen?: (state: Object) => Array<Object>,
}

const getBadgersByCategory = (badgers, category) => (
  badgers.filter(badger => badger.categories.filter(cat => cat.name === category.name).length > 0)
);

const createPages = (category, count) => (
  Array.from(Array(Math.ceil(count / 20)).keys()).map(page => ({ category, page: page + 1 }))
);

const genBadgersParams = state => (
  state.categories.reduce((params, category) => {
    const count = getBadgersByCategory(state.badgers, category).length;
    return params.concat(createPages(category.slug, count));
  }, createPages('everyone', state.badgers.length + 1))
);

export const routeDefinitions : Array<RouteDefinition> = [
  {
    title: 'Home',
    key: 'homePage',
    route: '',
    defaults: { contactUs: false },
    stateToProps: ({ featuredBlogPosts, contactUsURL }) => ({ featuredBlogPosts, contactUsURL }),
  },
  {
    title: 'What we do',
    key: 'whatWeDoPage',
    route: 'what-we-do',
  },
  {
    title: 'About Us',
    key: 'aboutUsPage',
    route: 'about-us',
    stateToProps: ({ contactUsURL }) => ({ contactUsURL }),
  },
  {
    title: 'Join us',
    key: 'joinUs',
    route: 'about-us/join-us',
    stateToProps: ({ jobs }) => ({ jobs }),
  },
  {
    title: ({ job }) => job.title,
    key: 'job',
    route: 'about-us/join-us/{slug}',
    stateToProps: (state, params = {}) => ({ job: state.job[params.slug] }),
    gen: state => state.jobs.map(({ slug }) => ({ slug })),
  },
  {
    title: 'Events',
    key: 'events',
    route: 'about-us/events',
    stateToProps: ({ events }) => ({ events }),
  },
  {
    title: ({ event }) => event.title,
    key: 'event',
    route: 'about-us/events/{year}/{month}/{date}/{slug}',
    stateToProps: (state, params = {}) => ({ event: state.event[params.slug] }),
    gen: state => state.events.map(({ startDateTime: { date, month, year }, slug }) => ({ date, month, year, slug })),
  },
  {
    title: ({ category }) => 'Meet our team' + (category !== 'everyone' ? ` (${category})` : ''),
    key: 'badgers',
    route: 'about-us/people/{category?}/{page?}',
    defaults: { category: 'everyone', page: 1 },
    stateToProps: ({ badgers, categories }, { category } = {}) => ({ badgers: getBadgersByCategory(badgers, category), categories, category }),
    gen: genBadgersParams,
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
