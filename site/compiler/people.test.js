import { compileSite } from '.';

describe('site/compiler', () => {
  const baseState = {
    jobs: [],
    job: {},
    contactUsURL: '',
    featuredBlogPosts: [],
    events: [],
    event: {},
    instagramPosts: [],
    tweets: [],
  };

  const baseBadger = {
    firstName: '',
    skills: [],
    influence: '',
    achievements: '',
    categories: [],
  };

  describe('compileSite', () => {
    it('renders the dynamic badger pages of the site', () => {
      const categories = [
        { name: 'Engineering', slug: 'engineering' },
        { name: 'Leadership', slug: 'leadership' },
      ];

      const a = {
        ...baseBadger,
        firstName: 'Alex',
        slug: 'alex',
        categories,
      };

      const pages = compileSite({
        ...baseState,
        badgers: [a],
        categories,
        badger: { [a.slug]: a },
      });

      expect(pages.length).to.equal(12);
      expect(pages[8].path).to.equal('about-us/people/index.html');
      expect(pages[8].body).to.match(/Alex/);
      expect(pages[8].body).to.match(/Are you a potential Badger/);
      expect(pages[9].path).to.equal('about-us/people/category/engineering/index.html');
      expect(pages[9].body).to.match(/Alex/);
      expect(pages[9].body).to.not.match(/Are you a potential Badger/);
      expect(pages[10].path).to.equal('about-us/people/category/leadership/index.html');
      expect(pages[10].body).to.match(/Alex/);
      expect(pages[10].body).to.not.match(/Are you a potential Badger/);
      expect(pages[11].path).to.equal('about-us/people/alex/index.html');
      expect(pages[11].body).to.match(/Alex/);
    });

    describe('with engineer, leadership and pm', () => {
      it('should render one page of each and everyone', () => {
        const categories = [
          { name: 'Engineering', slug: 'engineering' },
          { name: 'Leadership', slug: 'leadership' },
          { name: 'PM', slug: 'pm' },
        ];

        const a = {
          ...baseBadger,
          firstName: 'Alex',
          slug: 'alex',
          categories: [categories[0], categories[1]],
        };

        const s = {
          ...baseBadger,
          firstName: 'Sari',
          slug: 'sari',
          categories: [categories[2], categories[1]],
        };

        const pages = compileSite({
          ...baseState,
          badgers: [a, s],
          badger: {
            [a.slug]: a,
            [s.slug]: s,
          },
          categories,
        });

        expect(pages.length).to.equal(14);
        expect(pages[8].path).to.equal('about-us/people/index.html');
        expect(pages[8].body).to.match(/Alex/);
        expect(pages[8].body).to.match(/Sari/);
        expect(pages[8].body).to.match(/Are you a potential Badger/);
        expect(pages[9].path).to.equal('about-us/people/category/engineering/index.html');
        expect(pages[9].body).to.match(/Alex/);
        expect(pages[9].body).to.not.match(/Sari/);
        expect(pages[9].body).to.not.match(/Are you a potential Badger/);
        expect(pages[10].path).to.equal('about-us/people/category/leadership/index.html');
        expect(pages[10].body).to.match(/Sari/);
        expect(pages[10].body).to.match(/Alex/);
        expect(pages[10].body).to.not.match(/Are you a potential Badger/);
        expect(pages[11].path).to.equal('about-us/people/category/pm/index.html');
        expect(pages[11].body).to.match(/Sari/);
        expect(pages[11].body).to.not.match(/Alex/);
        expect(pages[11].body).to.not.match(/Are you a potential Badger/);
        expect(pages[12].path).to.equal('about-us/people/alex/index.html');
        expect(pages[12].body).to.match(/Alex/);
        expect(pages[13].path).to.equal('about-us/people/sari/index.html');
        expect(pages[13].body).to.match(/Sari/);
      });
    });

    describe('with one UX & Designer', () => {
      it('should render one everyone and one ux-design', () => {
        const categories = [{ name: 'UX & Design', slug: 'ux-design' }];
        const s = {
          ...baseBadger,
          firstName: 'Sari',
          slug: 'sari',
          categories,
        };
        const pages = compileSite({
          ...baseState,
          badgers: [s],
          badger: { [s.slug]: s },
          categories,
        });

        expect(pages.length).to.equal(11);
        expect(pages[8].path).to.equal('about-us/people/index.html');
        expect(pages[8].body).to.match(/Sari/);
        expect(pages[8].body).to.match(/Are you a potential Badger/);
        expect(pages[9].path).to.equal('about-us/people/category/ux-design/index.html');
        expect(pages[9].body).to.match(/Sari/);
        expect(pages[9].body).to.not.match(/Are you a potential Badger/);
        expect(pages[10].path).to.equal('about-us/people/sari/index.html');
        expect(pages[10].body).to.match(/Sari/);
      });
    });

    describe('with 21 Engineers and 1 Leadership', () => {
      it('should render two everyone pages, two engineering and one leadership', () => {
        const categories = [
          { name: 'Engineering', slug: 'engineering' },
          { name: 'Leadership', slug: 'leadership' },
        ];

        const badgers = [];
        const badger = {};

        for (let i = 0; i < 20; i += 1) {
          const a = {
            ...baseBadger,
            firstName: 'Alex ' + i,
            slug: 'alex-' + i,
            categories,
          };
          badgers.push(a);
          badger[a.slug] = a;
        }
        const e = {
          ...baseBadger,
          firstName: 'Etiene',
          slug: 'etiene',
          categories: [categories[0]],
        };
        const pages = compileSite({
          ...baseState,
          badgers: badgers.push(e) && badgers,
          badger: { ...badger, [e.slug]: e },
          categories,
        });

        expect(pages.length).to.equal(34);
        expect(pages[8].path).to.equal('about-us/people/index.html');
        expect(pages[8].body).to.match(/Alex 0/);
        expect(pages[8].body).to.match(/Alex 18/);
        expect(pages[8].body).to.match(/Are you a potential Badger/);
        expect(pages[8].body).to.not.match(/Etiene/);
        expect(pages[9].path).to.equal('about-us/people/category/everyone/page-2/index.html');
        expect(pages[9].body).to.match(/Etiene/);
        expect(pages[9].body).to.match(/Alex 19/);
        expect(pages[9].body).to.not.match(/Alex 18/);
        expect(pages[9].body).to.not.match(/Are you a potential Badger/);
        expect(pages[10].path).to.equal('about-us/people/category/engineering/index.html');
        expect(pages[10].body).to.match(/Alex 0/);
        expect(pages[10].body).to.match(/Alex 19/);
        expect(pages[10].body).to.not.match(/Etiene/);
        expect(pages[10].body).to.not.match(/Are you a potential Badger/);
        expect(pages[11].path).to.equal('about-us/people/category/engineering/page-2/index.html');
        expect(pages[11].body).to.match(/Etiene/);
        expect(pages[11].body).to.not.match(/Alex 19/);
        expect(pages[11].body).to.not.match(/Are you a potential Badger/);
        expect(pages[12].path).to.equal('about-us/people/category/leadership/index.html');
        expect(pages[12].body).to.match(/Alex 0/);
        expect(pages[12].body).to.match(/Alex 19/);
        expect(pages[12].body).to.not.match(/Etiene/);
        expect(pages[12].body).to.not.match(/Are you a potential Badger/);
        for (let i = 0; i < 20; i += 1) {
          expect(pages[13 + i].path).to.equal('about-us/people/alex-' + i + '/index.html');
        }
        expect(pages[33].path).to.equal('about-us/people/etiene/index.html');
        expect(pages[33].body).to.match(/Etiene/);
      });
    });

    describe('with 20 Engineers', () => {
      it('should render two everyone pages, including advert, and one for engineering', () => {
        const badgers = [];
        const badger = {};
        const categories = [{ name: 'Engineering', slug: 'engineering' }];
        for (let i = 0; i < 20; i += 1) {
          const a = {
            ...baseBadger,
            firstName: 'Alex ' + i,
            slug: 'alex-' + i,
            categories,
          };
          badgers.push(a);
          badger[a.slug] = a;
        }
        const pages = compileSite({
          ...baseState,
          badgers,
          badger,
          categories,
        });

        expect(pages.length).to.equal(31);
        expect(pages[8].path).to.equal('about-us/people/index.html');
        expect(pages[8].body).to.match(/Alex 0/);
        expect(pages[8].body).to.match(/Alex 18/);
        expect(pages[8].body).to.match(/Are you a potential Badger/);
        expect(pages[8].body).to.not.match(/Alex 19/);
        expect(pages[9].path).to.equal('about-us/people/category/everyone/page-2/index.html');
        expect(pages[9].body).to.match(/Alex 19/);
        expect(pages[9].body).to.not.match(/Alex 18/);
        expect(pages[9].body).to.not.match(/Are you a potential Badger/);
        expect(pages[10].path).to.equal('about-us/people/category/engineering/index.html');
        expect(pages[10].body).to.match(/Alex 0/);
        expect(pages[10].body).to.match(/Alex 19/);
        expect(pages[10].body).to.not.match(/Are you a potential Badger/);
        for (let i = 0; i < 20; i += 1) {
          expect(pages[11 + i].path).to.equal('about-us/people/alex-' + i + '/index.html');
        }
      });
    });
  });

  describe('with 19 Engineers', () => {
    it('should render one everyone pages, even including advert, and one for engineering', () => {
      const badgers = [];
      const badger = {};
      const categories = [{ name: 'Engineering', slug: 'engineering' }];
      for (let i = 0; i < 19; i += 1) {
        const a = {
          ...baseBadger,
          firstName: 'Alex ' + i,
          slug: 'alex-' + i,
          categories,
        };
        badgers.push(a);
        badger[a.slug] = a;
      }
      const pages = compileSite({
        ...baseState,
        badgers,
        badger,
        categories,
      });

      expect(pages.length).to.equal(29);
      expect(pages[8].path).to.equal('about-us/people/index.html');
      expect(pages[8].body).to.match(/Alex 0/);
      expect(pages[8].body).to.match(/Alex 18/);
      expect(pages[8].body).to.match(/Are you a potential Badger/);
      expect(pages[9].path).to.equal('about-us/people/category/engineering/index.html');
      expect(pages[9].body).to.match(/Alex 0/);
      expect(pages[9].body).to.match(/Alex 18/);
      expect(pages[9].body).to.not.match(/Are you a potential Badger/);
      for (let i = 0; i < 19; i += 1) {
        expect(pages[10 + i].path).to.equal('about-us/people/alex-' + i + '/index.html');
      }
    });
  });

  describe('with 41 Engineers and Leaderships', () => {
    it('should render three everyone pages and three for engineering and three for leadership', () => {
      const badgers = [];
      const badger = {};
      const categories = [
        { name: 'Engineering', slug: 'engineering' },
        { name: 'Leadership', slug: 'leadership' },
      ];
      for (let i = 0; i < 41; i += 1) {
        const a = {
          ...baseBadger,
          firstName: 'Alex ' + i,
          slug: 'alex-' + i,
          categories,
        };
        badgers.push(a);
        badger[a.slug] = a;
      }
      const pages = compileSite({
        ...baseState,
        badgers,
        badger,
        categories,
      });

      expect(pages.length).to.equal(58);
      expect(pages[8].path).to.equal('about-us/people/index.html');
      expect(pages[8].body).to.match(/Alex 0/);
      expect(pages[8].body).to.match(/Alex 18/);
      expect(pages[8].body).to.match(/Are you a potential Badger/);
      expect(pages[8].body).to.not.match(/Alex 19/);
      expect(pages[9].path).to.equal('about-us/people/category/everyone/page-2/index.html');
      expect(pages[9].body).to.match(/Alex 19/);
      expect(pages[9].body).to.match(/Alex 38/);
      expect(pages[9].body).to.not.match(/Alex 39/);
      expect(pages[9].body).to.not.match(/Are you a potential Badger/);
      expect(pages[10].path).to.equal('about-us/people/category/everyone/page-3/index.html');
      expect(pages[10].body).to.match(/Alex 39/);
      expect(pages[10].body).to.match(/Alex 40/);
      expect(pages[10].body).to.not.match(/Alex 38/);
      expect(pages[10].body).to.not.match(/Are you a potential Badger/);
      expect(pages[11].path).to.equal('about-us/people/category/engineering/index.html');
      expect(pages[11].body).to.match(/Alex 0/);
      expect(pages[11].body).to.match(/Alex 19/);
      expect(pages[11].body).to.not.match(/Alex 20/);
      expect(pages[11].body).to.not.match(/Are you a potential Badger/);
      expect(pages[12].path).to.equal('about-us/people/category/engineering/page-2/index.html');
      expect(pages[12].body).to.match(/Alex 20/);
      expect(pages[12].body).to.match(/Alex 39/);
      expect(pages[12].body).to.not.match(/Alex 40/);
      expect(pages[12].body).to.not.match(/Are you a potential Badger/);
      expect(pages[13].path).to.equal('about-us/people/category/engineering/page-3/index.html');
      expect(pages[13].body).to.match(/Alex 40/);
      expect(pages[13].body).to.not.match(/Alex 39/);
      expect(pages[13].body).to.not.match(/Are you a potential Badger/);
      expect(pages[14].path).to.equal('about-us/people/category/leadership/index.html');
      expect(pages[14].body).to.match(/Alex 0/);
      expect(pages[14].body).to.match(/Alex 19/);
      expect(pages[14].body).to.not.match(/Alex 20/);
      expect(pages[14].body).to.not.match(/Are you a potential Badger/);
      expect(pages[15].path).to.equal('about-us/people/category/leadership/page-2/index.html');
      expect(pages[15].body).to.match(/Alex 20/);
      expect(pages[15].body).to.match(/Alex 39/);
      expect(pages[15].body).to.not.match(/Alex 40/);
      expect(pages[15].body).to.not.match(/Are you a potential Badger/);
      expect(pages[16].path).to.equal('about-us/people/category/leadership/page-3/index.html');
      expect(pages[16].body).to.match(/Alex 40/);
      expect(pages[16].body).to.not.match(/Alex 39/);
      expect(pages[16].body).to.not.match(/Are you a potential Badger/);
      for (let i = 0; i < 41; i += 1) {
        expect(pages[17 + i].path).to.equal('about-us/people/alex-' + i + '/index.html');
      }
    });
  });

  describe('with 41 Engineers and 21 Leaderships', () => {
    it('should render three everyone pages and three for engineering and two for leadership', () => {
      const badgers = [];
      const badger = {};
      const categories = [
        { name: 'Engineering', slug: 'engineering' },
        { name: 'Leadership', slug: 'leadership' },
      ];
      for (let i = 0; i < 21; i += 1) {
        const a = {
          ...baseBadger,
          firstName: 'Alex ' + i,
          slug: 'alex-' + i,
          categories,
        };
        badgers.push(a);
        badger[a.slug] = a;
      }
      for (let i = 21; i < 41; i += 1) {
        const a = {
          ...baseBadger,
          firstName: 'Alex ' + i,
          slug: 'alex-' + i,
          categories: [categories[0]],
        };
        badgers.push(a);
        badger[a.slug] = a;
      }
      const pages = compileSite({
        ...baseState,
        badgers,
        badger,
        categories,
      });

      expect(pages.length).to.equal(57);
      expect(pages[8].path).to.equal('about-us/people/index.html');
      expect(pages[8].body).to.match(/Alex 0/);
      expect(pages[8].body).to.match(/Alex 18/);
      expect(pages[8].body).to.match(/Are you a potential Badger/);
      expect(pages[8].body).to.not.match(/Alex 19/);
      expect(pages[9].path).to.equal('about-us/people/category/everyone/page-2/index.html');
      expect(pages[9].body).to.match(/Alex 19/);
      expect(pages[9].body).to.match(/Alex 38/);
      expect(pages[9].body).to.not.match(/Alex 39/);
      expect(pages[9].body).to.not.match(/Are you a potential Badger/);
      expect(pages[10].path).to.equal('about-us/people/category/everyone/page-3/index.html');
      expect(pages[10].body).to.match(/Alex 39/);
      expect(pages[10].body).to.match(/Alex 40/);
      expect(pages[10].body).to.not.match(/Alex 38/);
      expect(pages[10].body).to.not.match(/Are you a potential Badger/);
      expect(pages[11].path).to.equal('about-us/people/category/engineering/index.html');
      expect(pages[11].body).to.match(/Alex 0/);
      expect(pages[11].body).to.match(/Alex 19/);
      expect(pages[11].body).to.not.match(/Alex 20/);
      expect(pages[11].body).to.not.match(/Are you a potential Badger/);
      expect(pages[12].path).to.equal('about-us/people/category/engineering/page-2/index.html');
      expect(pages[12].body).to.match(/Alex 20/);
      expect(pages[12].body).to.match(/Alex 39/);
      expect(pages[12].body).to.not.match(/Alex 40/);
      expect(pages[12].body).to.not.match(/Are you a potential Badger/);
      expect(pages[13].path).to.equal('about-us/people/category/engineering/page-3/index.html');
      expect(pages[13].body).to.match(/Alex 40/);
      expect(pages[13].body).to.not.match(/Alex 39/);
      expect(pages[13].body).to.not.match(/Are you a potential Badger/);
      expect(pages[14].path).to.equal('about-us/people/category/leadership/index.html');
      expect(pages[14].body).to.match(/Alex 0/);
      expect(pages[14].body).to.match(/Alex 19/);
      expect(pages[14].body).to.not.match(/Alex 20/);
      expect(pages[14].body).to.not.match(/Are you a potential Badger/);
      expect(pages[15].path).to.equal('about-us/people/category/leadership/page-2/index.html');
      expect(pages[15].body).to.match(/Alex 20/);
      expect(pages[15].body).to.not.match(/Alex 19/);
      expect(pages[15].body).to.not.match(/Are you a potential Badger/);
      for (let i = 0; i < 41; i += 1) {
        expect(pages[16 + i].path).to.equal('about-us/people/alex-' + i + '/index.html');
      }
    });
  });
});
