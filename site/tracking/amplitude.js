import amplitude from 'amplitude-js';

const logAmplitudeEvent = (eventType, eventOptions = {}, test = false) => {
  const eventProperties = {
    ...eventOptions,
    url: window.location.href,
  };

  if (test) {
    // eslint-disable-next-line no-console
    console.log(eventType, eventProperties);
  } else {
    amplitude.getInstance().logEvent(eventType, eventProperties);
  }
};

export const logScrollDepth = scrollDepth => {
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
