// @flow

export const removeTrailingSlash = (str: string) => {
  return typeof str === 'string' && str[str.length - 1] === '/'
    ? str.slice(0, str.length - 1)
    : str;
};

const dynamicPropRegExp = /^\{(.+)\}$/;

const mapProperties = (properties = {}, data = {}) => {
  return Object.keys(properties).reduce((acc, key) => {
    const value = properties[key];
    const isDynamic = dynamicPropRegExp.test(value);

    return { ...acc, [key]: isDynamic ? data[dynamicPropRegExp.exec(properties[key])[1]] : value };
  }, {});
};

export const fetchPageMetadata = (stateContext: {
  data?: { [string]: string },
  state: { route: string, ampPageType?: string, ampPageProperties?: { [string]: string } },
}) => {
  const { state, data } = stateContext;

  const pageType = state.ampPageType ? state.ampPageType : state.route;
  const properties = mapProperties(state.ampPageProperties, data);

  return { pageType, ...properties };
};

const logAmplitudeEvent = (
  eventType: string,
  eventOptions?: { [string]: string | number | Array<string | number> } = {},
): void => {
  const eventProperties = {
    ...eventOptions,
    url: removeTrailingSlash(window.location.href),
  };

  // $FlowIgnore
  amplitude.getInstance().logEvent(eventType, eventProperties);
};

export const logScrollDepth = (scrollDepth: number): void => {
  const title = document.title.split(' | ')[0];

  const query = window.location.search.substr(1);
  let referrerProperties = { referrer: 'internal' };
  if (query.includes('utm_source')) {
    const utmProperties = {};
    query.split('&').forEach(part => {
      const item = part.split('=');
      utmProperties[item[0]] = decodeURIComponent(item[1]);
    });

    referrerProperties = {
      referrer: utmProperties.utm_source,
      utmContent: utmProperties.utm_content,
      utmMedium: utmProperties.utm_medium,
    };
  }

  logAmplitudeEvent('SCROLL', {
    title,
    ...referrerProperties,
    scrollPercentage: scrollDepth,
  });
};

export default logAmplitudeEvent;
