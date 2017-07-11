import createStateNavigator from '../routes';
import { expandRoutes } from '.';

describe('site/compiler', () => {
  describe('compileSite', () => {
    it('renders all the static pages of the site', () => {
      const routes = expandRoutes(
        {
          jobs: [],
          job: {},
          contactUsURL: '',
          featuredBlogPosts: [],
          events: [],
          event: {},
          badgers: [],
          categories: [],
          instagramPosts: [],
          tweets: [],
        },
        createStateNavigator(),
      );

      const filePaths = routes.map(r => r.filePath);

      expect(filePaths).to.include.members([
        'index.html',
        'what-we-do/index.html',
        'our-work/index.html',
        'about-us/index.html',
        'about-us/join-us/index.html',
        'about-us/events/index.html',
        'our-work/case-study/retailer/index.html',
        'our-work/case-study/candem/index.html',
        'technology/index.html',
        '404.html',
        '50x/index.html',
        'offline/index.html',
        'about-us/people/index.html',
      ]);
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
          job: {
            'software-engineer': softwareEngineer,
            'ux-designer': uxDesinger,
          },
          contactUsURL: '',
          featuredBlogPosts: [],
          events: [],
          event: {},
          badgers: [],
          categories: [],
          instagramPosts: [],
          tweets: [],
        },
        createStateNavigator(),
      );

      const filePaths = routes.map(r => r.filePath);

      expect(filePaths).to.include.members([
        'about-us/join-us/software-engineer/index.html',
        'about-us/join-us/ux-designer/index.html',
      ]);
    });

    it('renders the featured blogs of the site on the home page', () => {
      const routes = expandRoutes(
        {
          jobs: [],
          job: {},
          contactUsURL: '',
          featuredBlogPosts: [
            {
              slug: '2016/12/7/how-we-use-service-workers-on-red-badgers-new-website',
              title: 'Service Worker support on Red Badgers new website',
              author: {},
            },
            {
              slug: '016/11/29/gitgithub-in-plain-english',
              title: 'Git and Github in Plain English',
              author: {},
            },
          ],
          events: [],
          event: {},
          badgers: [],
          categories: [],
          instagramPosts: [],
          tweets: [],
        },
        createStateNavigator(),
      );

      const filePaths = routes.map(r => r.filePath);

      expect(filePaths).to.include.members(['index.html']);
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
          job: {},
          contactUsURL: '',
          featuredBlogPosts: [],
          events: [upcomingEvent, designingEvent],
          event: {
            'upcoming-event': upcomingEvent,
            'designing-in-cross-functional-teams': designingEvent,
          },
          badgers: [],
          categories: [],
          instagramPosts: [],
          tweets: [],
        },
        createStateNavigator(),
      );

      const filePaths = routes.map(r => r.filePath);

      expect(filePaths).to.include.members([
        'about-us/events/2017/01/31/upcoming-event/index.html',
        'about-us/events/2016/08/03/designing-in-cross-functional-teams/index.html',
      ]);
    });
  });
});
