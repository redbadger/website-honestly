import createStateNavigator from '../routes';
import { expandRoutes } from '.';

describe('site/compiler', () => {
  const baseState = {
    jobs: [],
    jobLookup: {},
    featuredBlogPosts: [],
    events: [],
    eventLookup: {},
    instagramPosts: [],
    tweets: [],
    badgers: [],
    badgerLookup: {},
  };

  describe('compileSite', () => {
    it('renders the dynamic badger pages of the site', () => {
      const categories = [
        { name: 'Engineering', slug: 'engineering' },
        { name: 'Leadership', slug: 'leadership' },
      ];

      const a = {
        firstName: 'Alex',
        slug: 'alex',
        categories,
      };

      const routes = expandRoutes(
        {
          ...baseState,
          badgers: [a],
          categories,
          badgerLookup: { [a.slug]: 0 },
        },
        createStateNavigator(),
      );

      const filePaths = routes.map(r => r.filePath);

      expect(filePaths).to.include.members([
        'people/index.html',
        'people/category/engineering/index.html',
        'people/category/leadership/index.html',
      ]);
    });

    describe('with engineer, leadership and pm', () => {
      it('should render one page of each and everyone', () => {
        const categories = [
          { name: 'Engineering', slug: 'engineering' },
          { name: 'Leadership', slug: 'leadership' },
          { name: 'PM', slug: 'pm' },
        ];

        const a = {
          firstName: 'Alex',
          slug: 'alex',
          categories: [categories[0], categories[1]],
        };

        const s = {
          firstName: 'Sari',
          slug: 'sari',
          categories: [categories[2], categories[1]],
        };

        const routes = expandRoutes(
          {
            ...baseState,
            badgers: [a, s],
            badgerLookup: {
              [a.slug]: 0,
              [s.slug]: 1,
            },
            categories,
          },
          createStateNavigator(),
        );

        const filePaths = routes.map(r => r.filePath);

        expect(filePaths).to.include.members([
          'people/index.html',
          'people/category/engineering/index.html',
          'people/category/leadership/index.html',
          'people/category/pm/index.html',
        ]);
      });
    });

    describe('with one UX & Designer', () => {
      it('should render one everyone and one ux-design', () => {
        const categories = [{ name: 'UX & Design', slug: 'ux-design' }];
        const s = {
          firstName: 'Sari',
          slug: 'sari',
          categories,
        };
        const routes = expandRoutes(
          {
            ...baseState,
            badgers: [s],
            badgerLookup: { [s.slug]: 0 },
            categories,
          },
          createStateNavigator(),
        );

        const filePaths = routes.map(r => r.filePath);

        expect(filePaths).to.include.members([
          'people/index.html',
          'people/category/ux-design/index.html',
        ]);
      });
    });

    describe('with 21 Engineers and 1 Leadership', () => {
      it('should render two everyone pages, two engineering and one leadership', () => {
        const categories = [
          { name: 'Engineering', slug: 'engineering' },
          { name: 'Leadership', slug: 'leadership' },
        ];

        const badgers = [];
        const badgerLookup = {};

        for (let i = 0; i < 20; i += 1) {
          const a = {
            firstName: 'Alex ' + i,
            slug: 'alex-' + i,
            categories,
          };
          badgers.push(a);
          badgerLookup[a.slug] = i;
        }
        const e = {
          firstName: 'Etiene',
          slug: 'etiene',
          categories: [categories[0]],
        };
        const routes = expandRoutes(
          {
            ...baseState,
            badgers: badgers.push(e) && badgers,
            badgerLookup: { ...badgerLookup, [e.slug]: badgers.indexOf(e) },
            categories,
          },
          createStateNavigator(),
        );

        const filePaths = routes.map(r => r.filePath);

        expect(filePaths).to.include.members([
          'people/index.html',
          'people/category/everyone/page-2/index.html',
          'people/category/engineering/index.html',
          'people/category/engineering/page-2/index.html',
          'people/category/leadership/index.html',
        ]);
      });
    });

    describe('with 20 Engineers', () => {
      it('should render two everyone pages, including advert, and one for engineering', () => {
        const badgers = [];
        const badgerLookup = {};
        const categories = [{ name: 'Engineering', slug: 'engineering' }];
        for (let i = 0; i < 20; i += 1) {
          const a = {
            firstName: 'Alex ' + i,
            slug: 'alex-' + i,
            categories,
          };
          badgers.push(a);
          badgerLookup[a.slug] = i;
        }
        const routes = expandRoutes(
          {
            ...baseState,
            badgers,
            badgerLookup,
            categories,
          },
          createStateNavigator(),
        );

        const filePaths = routes.map(r => r.filePath);

        expect(filePaths).to.include.members([
          'people/index.html',
          'people/category/everyone/page-2/index.html',
          'people/category/engineering/index.html',
        ]);
      });
    });
  });

  describe('with 19 Engineers', () => {
    it('should render one everyone pages, even including advert, and one for engineering', () => {
      const badgers = [];
      const badgerLookup = {};
      const categories = [{ name: 'Engineering', slug: 'engineering' }];
      for (let i = 0; i < 19; i += 1) {
        const a = {
          firstName: 'Alex ' + i,
          slug: 'alex-' + i,
          categories,
        };
        badgers.push(a);
        badgerLookup[a.slug] = i;
      }
      const routes = expandRoutes(
        {
          ...baseState,
          badgers,
          badgerLookup,
          categories,
        },
        createStateNavigator(),
      );

      const filePaths = routes.map(r => r.filePath);

      expect(filePaths).to.include.members([
        'people/index.html',
        'people/category/engineering/index.html',
      ]);
    });
  });

  describe('with 41 Engineers and Leaderships', () => {
    it('should render three everyone pages and three for engineering and three for leadership', () => {
      const badgers = [];
      const badgerLookup = {};
      const categories = [
        { name: 'Engineering', slug: 'engineering' },
        { name: 'Leadership', slug: 'leadership' },
      ];
      for (let i = 0; i < 41; i += 1) {
        const a = {
          firstName: 'Alex ' + i,
          slug: 'alex-' + i,
          categories,
        };
        badgers.push(a);
        badgerLookup[a.slug] = i;
      }
      const routes = expandRoutes(
        {
          ...baseState,
          badgers,
          badgerLookup,
          categories,
        },
        createStateNavigator(),
      );

      const filePaths = routes.map(r => r.filePath);

      expect(filePaths).to.include.members([
        'people/index.html',
        'people/category/everyone/page-2/index.html',
        'people/category/everyone/page-3/index.html',
        'people/category/engineering/index.html',
        'people/category/engineering/page-2/index.html',
        'people/category/engineering/page-3/index.html',
        'people/category/leadership/index.html',
        'people/category/leadership/page-2/index.html',
      ]);
    });
  });

  describe('with 41 Engineers and 21 Leaderships', () => {
    it('should render three everyone pages and three for engineering and two for leadership', () => {
      const badgers = [];
      const badgerLookup = {};
      const categories = [
        { name: 'Engineering', slug: 'engineering' },
        { name: 'Leadership', slug: 'leadership' },
      ];
      for (let i = 0; i < 21; i += 1) {
        const a = {
          firstName: 'Alex ' + i,
          slug: 'alex-' + i,
          categories,
        };
        badgers.push(a);
        badgerLookup[a.slug] = i;
      }
      for (let i = 21; i < 41; i += 1) {
        const a = {
          firstName: 'Alex ' + i,
          slug: 'alex-' + i,
          categories: [categories[0]],
        };
        badgers.push(a);
        badgerLookup[a.slug] = badgers.indexOf(a);
      }
      const routes = expandRoutes(
        {
          ...baseState,
          badgers,
          badgerLookup,
          categories,
        },
        createStateNavigator(),
      );

      const filePaths = routes.map(r => r.filePath);

      expect(filePaths).to.include.members([
        'people/index.html',
        'people/category/everyone/page-2/index.html',
        'people/category/everyone/page-3/index.html',
        'people/category/engineering/index.html',
        'people/category/engineering/page-2/index.html',
        'people/category/engineering/page-3/index.html',
        'people/category/leadership/index.html',
        'people/category/leadership/page-2/index.html',
      ]);
    });
  });

  describe('with one badger', () => {
    it("should render this badger's profile page", () => {
      const categories = [{ name: 'Engineering', slug: 'engineering' }];

      const a = {
        firstName: 'Alex',
        slug: 'alex',
        categories,
      };

      const routes = expandRoutes(
        {
          ...baseState,
          badgers: [a],
          categories,
          badgerLookup: { [a.slug]: 0 },
        },
        createStateNavigator(),
      );

      const filePaths = routes.map(r => r.filePath);

      expect(filePaths).to.include.members(['people/alex/index.html']);
    });
  });

  describe('with multiple badger', () => {
    it("should render each badger's profile page", () => {
      const categories = [{ name: 'Engineering', slug: 'engineering' }];

      const a = {
        firstName: 'Alex',
        slug: 'alex',
        categories,
      };

      const s = {
        firstName: 'Sari',
        slug: 'sari',
        categories,
      };

      const routes = expandRoutes(
        {
          ...baseState,
          badgers: [a, s],
          categories,
          badgerLookup: {
            [a.slug]: 0,
            [s.slug]: 1,
          },
        },
        createStateNavigator(),
      );

      const filePaths = routes.map(r => r.filePath);

      expect(filePaths).to.include.members(['people/alex/index.html', 'people/sari/index.html']);
    });
  });
});
