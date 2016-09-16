import flatMap from 'ramda/src/chain';

function compactSlashes(string) {
  return string.replace(/\/+/, '/');
}

function fullPath(route, pathPrefix) {
  const routePath = route.props.path || '';
  const path = pathPrefix + routePath;
  return compactSlashes(path);
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
  const childrenInfo = flatMap(parseChild, children);
  return [info].concat(childrenInfo);
}

export function parseRouter(router) {
  const routes = getChildren(router);
  return flatMap(r => parseRoute(r, ''), routes);
}


export function routeFilePath(path) {
  if (path === '/*') {
    return '404.html';
  }
  return compactSlashes(`${path}/index.html`).replace(/^\//, '');
}
