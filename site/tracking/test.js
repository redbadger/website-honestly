import { removeTrailingSlash, fetchPageMetadata } from './amplitude';

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
});
