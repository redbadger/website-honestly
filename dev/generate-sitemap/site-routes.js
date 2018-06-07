export default function getSiteRoutes(state, routeDefinitions) {
  const allRoutes = [];

  // eslint-disable-next-line no-restricted-syntax
  for (const definition of routeDefinitions) {
    if (definition.gen) {
      const data = definition.gen(state);
      const originalRoute = definition.route;

      // eslint-disable-next-line no-restricted-syntax
      for (const params of data) {
        const route = Object.keys(params).reduce((prev, key) => {
          return prev.replace(`{${key}}`, params[key]);
        }, originalRoute);

        const fragments = route.split('+');
        if (fragments.length > 1) {
          const routesFromFragments = fragments.map((_, i) => fragments.slice(0, i + 1).join(''));
          allRoutes.push(...routesFromFragments);
        } else {
          allRoutes.push(route);
        }
      }
    } else {
      allRoutes.push(definition.route);
    }
  }

  const extraRoutes = ['blog', 'search'];

  const routesToIgnore = ['404', '50x'];

  const finalRoutes = allRoutes
    .concat(extraRoutes)
    .filter(route => !routesToIgnore.includes(route))
    .sort();

  // Remove duplicates
  return [...new Set(finalRoutes)];
}
