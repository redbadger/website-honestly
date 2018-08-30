import logAmplitudeEvent, {
  removeTrailingSlash,
  fetchPageMetadata,
  logEvent,
  logEventOnce,
  logScrollDepth,
} from './amplitude';

describe('site/tracking/amplitude', () => {
  describe('removeTrailingSlash', () => {
    it('removes trailing slash', () => {
      expect(removeTrailingSlash('http://red-badger.com/our-work/case-study/')).toEqual(
        'http://red-badger.com/our-work/case-study',
      );
    });

    it('returns the string if there is no trailing slash', () => {
      expect(removeTrailingSlash('http://red-badger.com')).toEqual('http://red-badger.com');
    });

    it('returns other types without error', () => {
      expect(removeTrailingSlash([])).toEqual([]);
    });
  });

  describe('fetchPageMetadata', () => {
    it('gets the pageType if one is defined', () => {
      const stateContext = { state: { ampPageType: 'home', route: '' } };
      expect(fetchPageMetadata(stateContext)).toEqual({ pageType: 'home' });
    });

    // route is a required prop on a route definition
    it('defaults pageType to route', () => {
      const stateContext = { state: { route: 'our-work' } };
      expect(fetchPageMetadata(stateContext)).toEqual({ pageType: 'our-work' });
    });

    it('gets the dynamic page properties', () => {
      const stateContext = {
        data: { slug: 'react-meetup' },
        state: { ampPageProperties: { eventName: '{slug}' }, ampPageType: 'event' },
      };
      expect(fetchPageMetadata(stateContext)).toEqual({
        pageType: 'event',
        eventName: 'react-meetup',
      });
    });

    it('gets the static page properties', () => {
      const stateContext = {
        state: {
          route: 'our-work',
          ampPageProperties: { caseStudyName: 'fortnum-and-mason-digital-transformation' },
          ampPageType: 'case-study',
        },
      };
      expect(fetchPageMetadata(stateContext)).toEqual({
        pageType: 'case-study',
        caseStudyName: 'fortnum-and-mason-digital-transformation',
      });
    });

    it('gets the both static and dynamic page properties', () => {
      const stateContext = {
        data: { slug: 'react-meetup' },
        state: {
          ampPageProperties: { eventName: '{slug}', otherData: 'data' },
          ampPageType: 'event',
        },
      };
      expect(fetchPageMetadata(stateContext)).toEqual({
        pageType: 'event',
        eventName: 'react-meetup',
        otherData: 'data',
      });
    });
  });

  describe('logEvent', () => {
    let spy;

    beforeEach(() => {
      spy = jest.fn();

      global.amplitude = {
        getInstance: () => ({ logEvent: spy }),
      };
    });

    afterEach(() => {
      spy.mockReset();
      global.amplitude = null;
      document.cookie = 'event-done=; expires=Thu, 01 Jan 1970 00:00:00 GMT';
      document.title = '';
      window.history.replaceState({}, '', '/');
    });

    it('passes the correct arguments to the amplitude API', () => {
      const eventType = 'EVENT';
      const eventProperties = { prop: 1 };
      logEvent(eventType, eventProperties);
      expect(spy).toHaveBeenCalledWith(eventType, eventProperties);
    });

    describe('logEventOnce', () => {
      it('calls logEvent if the cookie is not set', () => {
        const eventType = 'EVENT';
        const eventProperties = { prop: 1 };
        logEventOnce(eventType, eventProperties);
        expect(spy).toHaveBeenCalledWith(eventType, eventProperties);
      });

      it('does not call logEvent if the cookie is set', () => {
        const eventType = 'EVENT';
        const eventProperties = { prop: 1 };
        document.cookie = 'event-done=1; path=/';
        logEventOnce(eventType, eventProperties);
        expect(spy).not.toHaveBeenCalledWith(eventType, eventProperties);
      });
    });

    describe('logAmplitudeEvent', () => {
      it('calls logEvent and sets the cookie', () => {
        const eventType = 'EVENT';
        const eventProperties = { prop: 1 };
        logAmplitudeEvent(eventType, eventProperties, true);
        expect(spy).toHaveBeenCalledWith(eventType, {
          ...eventProperties,
          url: 'https://red-badger.com',
        });
        expect(document.cookie).toBe('event-done=1');
      });

      it('calls logEvent', () => {
        const eventType = 'EVENT';
        const eventProperties = { prop: 1 };
        logAmplitudeEvent(eventType, eventProperties);
        expect(spy).toHaveBeenCalledWith(eventType, {
          ...eventProperties,
          url: 'https://red-badger.com',
        });
        expect(document.cookie).toBe('');
      });

      it('sets the right eventProperties,', () => {
        window.history.pushState({}, '', 'blog/');
        const eventType = 'EVENT';
        const eventProperties = { prop: 1 };
        logAmplitudeEvent(eventType, eventProperties);
        expect(spy).toHaveBeenCalledWith(eventType, {
          ...eventProperties,
          url: 'https://red-badger.com/blog',
        });
      });
    });

    describe('logScrollDepth', () => {
      it('sets the correct eventProperties', () => {
        const eventType = 'SCROLL';
        const scrollPercentage = 20;
        const pageTitle = 'Red Badger';
        document.title = pageTitle;
        logScrollDepth(scrollPercentage);
        expect(spy).toHaveBeenCalledWith(eventType, {
          url: 'https://red-badger.com',
          pageTitle,
          scrollPercentage: 20,
        });
      });
    });
  });
});
