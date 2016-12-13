// @flow

type RouteDefinition = {|
  title: string | (props: Object) => string,
  key: string,
  route: string,
  cacheable: boolean,
  stateToProps?: (state: Object, slug?: string) => any,
  gen?: (state: Object) => Array<string>
|}

export const routeDefinitions : Array<RouteDefinition> = [
  {
    title: 'Home',
    key: 'homePage',
    route: '',
    cacheable: true,
    stateToProps: state => ({ featuredBlogPosts: state.featuredBlogPosts }),
  },
  {
    title: 'What we do',
    key: 'whatWeDoPage',
    route: 'what-we-do',
    cacheable: true,
  },
  {
    title: 'Join us',
    key: 'joinUs',
    route: 'about-us/join-us',
    cacheable: false,
    stateToProps: ({ jobs }) => ({ jobs }),
  },
  {
    title: ({ job }) => job.title,
    key: 'job',
    route: 'about-us/join-us/{slug}',
    cacheable: false,
    stateToProps: (state, slug) => ({ job: state.job[slug] }),
    gen: state => Object.keys(state.job || {}),
  },
  {
    title: 'Not found',
    key: 'notFoundPage',
    route: '404',
    cacheable: true,
  },
  {
    title: 'Server error',
    key: 'serverErrorPage',
    route: '50x',
    cacheable: true,
  },
  {
    title: 'Lost connection',
    key: 'offlinePage',
    route: 'offline',
    cacheable: true,
  },
];
