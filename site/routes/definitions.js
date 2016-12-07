// @flow

type RouteDefinition = {|
  title: string | (props: Object) => string,
  key: string,
  route: string,
  stateToProps?: (state: Object, slug?: string) => any,
  gen?: (state: Object) => Array<String>
|}

export const routeDefinitions : Array<RouteDefinition> = [
  {
    title: 'Home',
    key: 'homePage',
    route: '',
    stateToProps: state => ({ featuredBlogPosts: state.featuredBlogPosts }),
  },
  {
    title: 'What we do',
    key: 'whatWeDoPage',
    route: 'what-we-do',
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
