import { flatMap } from '../../../lib/array';

function fullPath(route, prefix) {
  return (prefix + (route.props.path || '')).replace(/\/+/, '/');
}

function routeInfo(route, prefix) {
  return {
    path: fullPath(route, prefix),
    numChildren: (route.props.children || []).length,
    indexRoute: route.type.displayName === 'IndexRoute',
  };
}

function getChildren(route) {
  const children = route.props.children;
  if (Array.isArray(children)) {
    return children;
  }
  if (children) {
    return [children];
  }
  return [];
}

function parseRoute(route, prefix) {
  const info = routeInfo(route, prefix);
  const children = getChildren(route);
  const parseChild = r => parseRoute(r, fullPath(route, prefix));
  const childrenInfo = flatMap(children, parseChild);
  return [info].concat(childrenInfo);
}

export default function parseRouter(router) {
  const routes = getChildren(router);
  return flatMap(routes, r => parseRoute(r, ''));
}
