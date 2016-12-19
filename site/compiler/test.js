import { compileSite } from '.';

describe('site/compiler', () => {
  describe('compileSite', () => {
    it('renders all the static pages of the site', () => {
      const pages = compileSite({ jobs: [], job: {}, contactUsURL: '', featuredBlogPosts: [], events: [] });

      expect(pages.length).to.equal(8);
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
      });

      expect(pages.length).to.equal(10);
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
      expect(pages[8].path).to.equal('about-us/join-us/software-engineer/index.html');
      expect(pages[8].body).to.match(/Software Engineer/);
      expect(pages[9].path).to.equal('about-us/join-us/ux-designer/index.html');
      expect(pages[9].body).to.match(/UX Designer/);
    });
  });
});
