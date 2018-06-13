const logAmplitudeEvent = (eventType, eventOptions) => {
  const eventProperties = {
    ...eventOptions,
    url: window.location.pathname,
  };

  amplitude.getInstance().logEvent(eventType, eventProperties);
};

export default logAmplitudeEvent;
