import { compileSite } from '.';

describe('site/compiler', () => {
  describe('compileSite', () => {
    it('renders all the static pages of the site', () => {
      const pages = compileSite(
        {
          jobs: [],
          job: {},
          contactUsURL: '',
          featuredBlogPosts: [],
          events: [],
          event: {},
          badgers: [],
        });

      expect(pages.length).to.equal(9);
      expect(pages[0].path).to.equal('index.html');
      expect(pages[0].body).to.match(/We work with you to deliver digital products/);
      expect(pages[1].path).to.equal('what-we-do/index.html');
      expect(pages[1].body).to.match(/How do we do the thing right\?/);
      expect(pages[2].path).to.equal('about-us/index.html');
      expect(pages[2].body).to.match(/This is what we believe/);
      expect(pages[3].path).to.equal('about-us/join-us/index.html');
      expect(pages[3].body).to.match(/Join us/);
      expect(pages[4].path).to.equal('about-us/events/index.html');
      expect(pages[4].body).to.match(/React London 2017/);
      expect(pages[5].path).to.equal('404.html');
      expect(pages[5].body).to.match(/Whaaaaaat!\?/);
      expect(pages[6].path).to.equal('50x/index.html');
      expect(pages[6].body).to.match(/Oops!/);
      expect(pages[7].path).to.equal('offline/index.html');
      expect(pages[7].body).to.match(/No internet connection/);
      expect(pages[8].path).to.equal('about-us/people/index.html');
      expect(pages[8].body).to.match(/everyone/);
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
      const pages = compileSite({
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
      });

      expect(pages.length).to.equal(11);
      expect(pages[8].path).to.equal('about-us/join-us/software-engineer/index.html');
      expect(pages[8].body).to.match(/Software Engineer/);
      expect(pages[9].path).to.equal('about-us/join-us/ux-designer/index.html');
      expect(pages[9].body).to.match(/UX Designer/);
    });

    it('renders the featured blogs of the site on the home page', () => {
      const pages = compileSite({
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
      });

      expect(pages.length).to.equal(9);
      expect(pages[0].path).to.equal('index.html');
      expect(pages[0].body).to.match(/Service Worker support on Red Badgers new website/);
      expect(pages[0].body).to.match(/Git and Github in Plain English/);
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

      const pages = compileSite({
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
      });

      expect(pages.length).to.equal(11);
      expect(pages[7].body).to.match(/No internet connection/);
      expect(pages[8].path).to.equal('about-us/events/2017/01/31/upcoming-event/index.html');
      expect(pages[8].body).to.match(/Upcoming Event/);
      expect(pages[9].path).to.equal('about-us/events/2016/08/03/designing-in-cross-functional-teams/index.html');
      expect(pages[9].body).to.match(/Designing in cross-functional teams/);
    });

    it('renders the dynamic badger pages of the site', () => {
      const pages = compileSite({
        jobs: [],
        job: {},
        contactUsURL: '',
        featuredBlogPosts: [],
        events: [],
        event: {},
        badgers: [{
          firstName: 'Alex',
          lastName: 'Savin',
          tags: [
            'Engineering',
            'Leadership',
          ],
        }],
      });

      expect(pages.length).to.equal(11);
      expect(pages[0].path).to.equal('index.html');
      expect(pages[0].body).to.match(/We work with you to deliver digital products/);
      expect(pages[1].path).to.equal('what-we-do/index.html');
      expect(pages[1].body).to.match(/How do we do the thing right\?/);
      expect(pages[2].path).to.equal('about-us/index.html');
      expect(pages[2].body).to.match(/This is what we believe/);
      expect(pages[3].path).to.equal('about-us/join-us/index.html');
      expect(pages[3].body).to.match(/Join us/);
      expect(pages[4].path).to.equal('about-us/events/index.html');
      expect(pages[4].body).to.match(/React London 2017/);
      expect(pages[5].path).to.equal('404.html');
      expect(pages[5].body).to.match(/Whaaaaaat!\?/);
      expect(pages[6].path).to.equal('50x/index.html');
      expect(pages[6].body).to.match(/Oops!/);
      expect(pages[7].path).to.equal('offline/index.html');
      expect(pages[7].body).to.match(/No internet connection/);
      expect(pages[8].path).to.equal('about-us/people/index.html');
      expect(pages[8].body).to.match(/everyone/);
      expect(pages[9].path).to.equal('about-us/people/engineering/index.html');
      expect(pages[9].body).to.match(/engineering/);
      expect(pages[10].path).to.equal('about-us/people/leadership/index.html');
      expect(pages[10].body).to.match(/leadership/);
    });
  });
});
