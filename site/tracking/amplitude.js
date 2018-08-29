// @flow

// Amplitude Tracking
// Note parts of this code exist in the blog repo too. When updating,
// make sure changes happen there as well, especially in relation to
// events and properties we send.

import { getCookieValue } from '../components/utils';

type EventType = string;
type EventProperties = { [string]: string | number | string[] };

declare var amplitude: {
  getInstance: () => {
    logEvent: (eventType: EventType, eventPropertiese: EventProperties) => void,
  },
};

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
  state: {
    title: string,
    route: string,
    ampPageType?: string,
    ampPageProperties?: { [string]: string },
  },
}) => {
  const { state, data } = stateContext;

  const pageType = state.ampPageType ? state.ampPageType : state.route;
  const properties = mapProperties(state.ampPageProperties, data);

  return { pageType, pageTitle: state.title, ...properties };
};

export const logEvent = (eventType: EventType, eventProperties: EventProperties) =>
  amplitude.getInstance().logEvent(eventType, eventProperties);

export const logEventOnce = (eventType: EventType, eventProperties: EventProperties) => {
  const event = eventType
    .toLowerCase()
    .split(' ')
    .concat(['done'])
    .join('-');

  const doneCookie = getCookieValue(event);

  if (doneCookie === '1') return;

  document.cookie = `${event}=1; path=/`;
  logEvent(eventType, eventProperties);
};

const logAmplitudeEvent = (
  eventType: string,
  eventOptions?: { [string]: string | number | Array<string | number> } = {},
  once?: boolean = false,
): void => {
  const eventProperties = {
    ...eventOptions,
    url: removeTrailingSlash(window.location.href),
  };

  return once ? logEventOnce(eventType, eventProperties) : logEvent(eventType, eventProperties);
};

export const logScrollDepth = (scrollPercentage: number): void => {
  const pageTitle = document.title.split(' | ')[0];

  logAmplitudeEvent('SCROLL', {
    url: removeTrailingSlash(window.location.href),
    pageTitle,
    scrollPercentage,
  });
};

export default logAmplitudeEvent;
