import amplitude from 'amplitude-js';

const logAmplitudeEvent = (eventType, eventOptions, test = false) => {
  const eventProperties = {
    ...eventOptions,
    url: window.location.pathname,
  };

  if (test) {
    // eslint-disable-next-line no-console
    console.log(eventType, eventProperties);
  } else {
    amplitude.getInstance().logEvent(eventType, eventProperties);
  }
};

export default logAmplitudeEvent;
