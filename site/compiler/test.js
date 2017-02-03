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
        }, createStateNavigator());

      expect(routes.length).to.equal(9);
      expect(routes[0].filePath).to.equal('index.html');
      expect(routes[1].filePath).to.equal('what-we-do/index.html');
      expect(routes[2].filePath).to.equal('about-us/index.html');
      expect(routes[3].filePath).to.equal('about-us/join-us/index.html');
      expect(routes[4].filePath).to.equal('about-us/events/index.html');
      expect(routes[5].filePath).to.equal('404.html');
      expect(routes[6].filePath).to.equal('50x/index.html');
      expect(routes[7].filePath).to.equal('offline/index.html');
      expect(routes[8].filePath).to.equal('about-us/people/index.html');
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
      const routes = expandRoutes({
        jobs: [
          softwareEngineer,
          uxDesinger,
        ],
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
      }, createStateNavigator());

      expect(routes.length).to.equal(11);
      expect(routes[8].filePath).to.equal('about-us/join-us/software-engineer/index.html');
      expect(routes[9].filePath).to.equal('about-us/join-us/ux-designer/index.html');
    });

    it('renders the featured blogs of the site on the home page', () => {
      const routes = expandRoutes({
        jobs: [],
        job: {},
        contactUsURL: '',
        featuredBlogPosts: [
          {
            slug: '2016/12/7/how-we-use-service-workers-on-red-badgers-new-website',
            title: 'Service Worker support on Red Badgers new website',
            author: {
            },
          },
          {
            slug: '016/11/29/gitgithub-in-plain-english',
            title: 'Git and Github in Plain English',
            author: {
            },
          },
        ],
        events: [],
        event: {},
        badgers: [],
        categories: [],
        instagramPosts: [],
        tweets: [],
      }, createStateNavigator());

      expect(routes.length).to.equal(9);
      expect(routes[0].filePath).to.equal('index.html');
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

      const routes = expandRoutes({
        jobs: [],
        job: {},
        contactUsURL: '',
        featuredBlogPosts: [],
        events: [
          upcomingEvent,
          designingEvent,
        ],
        event: {
          'upcoming-event': upcomingEvent,
          'designing-in-cross-functional-teams': designingEvent,
        },
        badgers: [],
        categories: [],
        instagramPosts: [],
        tweets: [],
      }, createStateNavigator());

      expect(routes.length).to.equal(11);
      expect(routes[8].filePath).to.equal('about-us/events/2017/01/31/upcoming-event/index.html');
      expect(routes[9].filePath).to.equal('about-us/events/2016/08/03/designing-in-cross-functional-teams/index.html');
    });
  });
});
