// @flow
import { stateToBadgerProps, genBadgersParams, getBadgersTitle } from './selectors';

type RouteDefinition = {|
  title: string | (props: Object) => string,
  key: string,
  route: string,
  defaults?: any,
  stateToProps?: (state: Object, params?: Object) => any,
  gen?: (state: Object) => Array<Object>,
|}

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
    title: 'Our work',
    key: 'ourWorkPage',
    route: 'our-work',
  },
  {
    title: 'About Us',
    key: 'aboutUsPage',
    route: 'about-us',
    stateToProps: ({ contactUsURL, tweets, instagramPosts }) => ({ contactUsURL, tweets, instagramPosts }),
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
    title: getBadgersTitle,
    key: 'badgers',
    route: 'about-us/people+/category/{category}+/page-{page}',
    defaults: { category: 'everyone', page: 1 },
    stateToProps: stateToBadgerProps,
    gen: genBadgersParams,
  },
  {
    title: ({ badger }) => [badger.firstName, badger.lastName].join(' '),
    key: 'badger',
    route: 'about-us/people/{slug}',
    stateToProps: (state, params = {}) => ({ badger: state.badger[params.slug] }),
    gen: state => state.badgers.map(({ slug }) => ({ slug })),
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
