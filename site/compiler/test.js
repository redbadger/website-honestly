import createStateNavigator from '../routes';
import { expandRoutes } from '.';

describe('site/compiler', () => {
  describe('expandRoutes', () => {
    it('renders all the static pages of the site', () => {
      const routes = expandRoutes(
        {
          jobs: [],
          jobLookup: {},
          events: [],
          eventLookup: {},
          badgers: [],
          badgerLookup: {},
          categories: [],
          instagramPosts: [],
          tweets: [],
        },
        createStateNavigator(),
      );

      const filePaths = routes.map(r => r.filePath);

      expect(filePaths).toEqual(
        expect.arrayContaining([
          'index.html',
          'what-we-do/index.html',
          'our-work/index.html',
          'about-us/index.html',
          'jobs/index.html',
          'events/index.html',
          'our-work/case-study/retailer/index.html',
          'our-work/case-study/camden-market/index.html',
          'our-work/case-study/financial-times/index.html',
          'technology/index.html',
          '404.html',
          '50x/index.html',
          'offline/index.html',
          'people/index.html',
        ]),
      );
    });

    it('renders the dynamic jobs pages of the site', () => {
      const softwareEngineer = {
        slug: 'software-engineer',
        title: 'Software Engineer',
      };
      const uxDesinger = {
        slug: 'ux-designer',
        title: 'UX Designer',
      };
      const routes = expandRoutes(
        {
          jobs: [softwareEngineer, uxDesinger],
          jobLookup: {
            'software-engineer': 0,
            'ux-designer': 1,
          },
          events: [],
          eventLookup: {},
          badgers: [],
          badgerLookup: {},
          categories: [],
          instagramPosts: [],
          tweets: [],
        },
        createStateNavigator(),
      );

      const filePaths = routes.map(r => r.filePath);

      expect(filePaths).toEqual(
        expect.arrayContaining([
          'jobs/software-engineer/index.html',
          'jobs/ux-designer/index.html',
        ]),
      );
    });

    it('renders the dynamic events pages of the site', () => {
      const upcomingEvent = {
        slug: 'upcoming-event',
        title: 'Upcoming Event',
        body: [],
        startDateTime: {
          date: '31',
          month: '01',
          year: '2017',
          monthSym: 'January',
        },
        endDateTime: {
          date: '01',
          month: '02',
          year: '2017',
          monthSym: 'February',
        },
      };
      const designingEvent = {
        slug: 'designing-in-cross-functional-teams',
        title: 'Designing in cross-functional teams',
        body: [],
        startDateTime: {
          date: '03',
          month: '08',
          year: '2016',
          monthSym: 'August',
        },
        endDateTime: {
          date: '04',
          month: '08',
          year: '2016',
          monthSym: 'August',
        },
      };

      const routes = expandRoutes(
        {
          jobs: [],
          jobLookup: {},
          events: [upcomingEvent, designingEvent],
          eventLookup: {
            'upcoming-event': 0,
            'designing-in-cross-functional-teams': 1,
          },
          badgers: [],
          badgerLookup: {},
          categories: [],
          instagramPosts: [],
          tweets: [],
        },
        createStateNavigator(),
      );

      const filePaths = routes.map(r => r.filePath);

      expect(filePaths).toEqual(
        expect.arrayContaining([
          'events/2017/01/31/upcoming-event/index.html',
          'events/2016/08/03/designing-in-cross-functional-teams/index.html',
        ]),
      );
    });
  });
});
