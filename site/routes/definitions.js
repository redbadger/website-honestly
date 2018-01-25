// @flow
import { stateToBadgerProps, genBadgersParams, getBadgersTitle } from './selectors';

type RouteDefinition = {|
  title: string | ((props: Object) => string),
  key: string,
  route: string,
  defaults?: any,
  stateToProps?: (state: Object, params?: Object) => any,
  gen?: (state: Object) => Array<Object>,
  parentKey?: string,
  noLayout?: boolean,
|};

export const routeDefinitions: Array<RouteDefinition> = [
  {
    title: 'Home',
    key: 'homePage',
    route: '',
    defaults: { contactUs: false },
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
    parentKey: 'whatWeDoPage',
  },
  {
    title: 'About us',
    key: 'aboutUsPage',
    route: 'about-us',
    stateToProps: ({ tweets, instagramPosts, qAndAs }) => ({
      tweets,
      instagramPosts,
      qAndAs,
    }),
  },
  {
    title: 'Join us',
    key: 'joinUs',
    route: 'jobs',
    stateToProps: ({ jobs }) => ({ jobs }),
  },
  {
    title: ({ job }) => job.title,
    key: 'job',
    route: 'jobs/{slug}',
    stateToProps: (state, params = {}) => ({ job: state.jobs[state.jobLookup[params.slug]] }),
    gen: state => state.jobs.map(({ slug }) => ({ slug })),
    parentKey: 'joinUs',
  },
  {
    title: 'Events',
    key: 'events',
    route: 'events',
    stateToProps: ({ events, eventsBanner }) => ({ events, eventsBanner }),
  },
  {
    title: ({ event }) => event.title,
    key: 'event',
    route: 'events/{year}/{month}/{date}/{slug}',
    stateToProps: (state, params = {}) => ({ event: state.events[state.eventLookup[params.slug]] }),
    gen: state =>
      state.events.map(({ startDateTime: { date, month, year }, slug }) => ({
        date,
        month,
        year,
        slug,
      })),
    parentKey: 'events',
  },
  {
    title: getBadgersTitle,
    key: 'badgers',
    route: 'people+/category/{category}+/page-{page}',
    defaults: { category: 'everyone', page: 1 },
    stateToProps: stateToBadgerProps,
    gen: genBadgersParams,
    parentKey: 'aboutUsPage',
  },
  {
    title: ({ badger }) => [badger.firstName, badger.lastName].join(' '),
    key: 'badger',
    route: 'people/{slug}',
    stateToProps: (state, params = {}) => ({
      badger: state.badgers[state.badgerLookup[params.slug]],
    }),
    gen: state => state.badgers.map(({ slug }) => ({ slug })),
    parentKey: 'badgers',
  },
  {
    title: 'Retailer case study',
    key: 'retailerCaseStudy',
    route: 'our-work/case-study/retailer',
    parentKey: 'ourWorkPage',
  },
  {
    title: 'Fortnum & Mason case study',
    key: 'fortnumAndMasonCaseStudy',
    route: 'our-work/case-study/fortnum-and-mason',
    parentKey: 'ourWorkPage',
  },
  {
    title: 'Fortnum & Mason digital transformation',
    key: 'fMTeaCaseStudy',
    route: 'our-work/case-study/fortnum-and-mason-digital-transformation',
    parentKey: 'ourWorkPage',
  },
  {
    title: 'Financial Times case study',
    key: 'financialTimesCaseStudy',
    route: 'our-work/case-study/financial-times',
    parentKey: 'ourWorkPage',
  },
  {
    title: 'BMW Virtual Museum case study',
    key: 'bmwCaseStudy',
    route: 'our-work/case-study/bmw',
    parentKey: 'ourWorkPage',
  },
  {
    title: 'BBC Now case study',
    key: 'bbcCaseStudy',
    route: 'our-work/case-study/bbc-now',
    parentKey: 'ourWorkPage',
  },
  {
    title: 'Haller Foundation case study',
    key: 'hallerCaseStudy',
    route: 'our-work/case-study/haller',
    parentKey: 'ourWorkPage',
  },
  {
    title: 'Sky CMS case study',
    key: 'skyCMSCaseStudy',
    route: 'our-work/case-study/sky-cms',
    parentKey: 'ourWorkPage',
  },
  {
    title: 'Sky case study',
    key: 'skyCaseStudy',
    route: 'our-work/case-study/sky',
    parentKey: 'ourWorkPage',
  },
  {
    title: 'Bank case study',
    key: 'bankCaseStudy',
    route: 'our-work/case-study/financial-services-digital-transformation',
    parentKey: 'ourWorkPage',
  },
  {
    title: 'Technology',
    key: 'technology',
    route: 'technology',
    stateToProps: ({ triedAndTestedBlogPosts, growingTrendsBlogPosts }) => ({
      triedAndTestedBlogPosts,
      growingTrendsBlogPosts,
    }),
    parentKey: 'whatWeDoPage',
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
  {
    title: 'Browser not supported',
    key: 'browserNotSupported',
    route: 'browser-not-supported',
    noLayout: true,
  },
  {
    title: 'Camden market case study',
    key: 'camdenMarketCaseStudy',
    route: 'our-work/case-study/camden-market',
    parentKey: 'ourWorkPage',
  },
];
