import { compileSite } from '.';

describe('site/compiler', () => {
  describe('compileSite', () => {
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
          categories: [
            { name: 'Engineering', slug: 'engineering' },
            { name: 'Leadership', slug: 'leadership' },
          ],
        }],
        categories: [
          { name: 'Engineering', slug: 'engineering' },
          { name: 'Leadership', slug: 'leadership' },
        ],
      });

      expect(pages.length).to.equal(11);
      expect(pages[8].path).to.equal('about-us/people/index.html');
      expect(pages[8].body).to.match(/everyone/);
      expect(pages[9].path).to.equal('about-us/people/engineering/index.html');
      expect(pages[9].body).to.match(/engineering/);
      expect(pages[10].path).to.equal('about-us/people/leadership/index.html');
      expect(pages[10].body).to.match(/leadership/);
    });

    describe('with engineer, leadership and pm', () => {
      it('should render one page of each and everyone', () => {
        const pages = compileSite({
          jobs: [],
          job: {},
          contactUsURL: '',
          featuredBlogPosts: [],
          events: [],
          event: {},
          badgers: [
            {
              firstName: 'Alex',
              lastName: 'Savin',
              categories: [
                { name: 'Engineering', slug: 'engineering' },
                { name: 'Leadership', slug: 'leadership' },
              ],
            },
            {
              firstName: 'Sari',
              lastName: 'Griffiths',
              categories: [
                { name: 'PM', slug: 'pm' },
                { name: 'Leadership', slug: 'leadership' },
              ],
            },
          ],
          categories: [
            { name: 'Engineering', slug: 'engineering' },
            { name: 'Leadership', slug: 'leadership' },
            { name: 'PM', slug: 'pm' },
          ],
        });

        expect(pages.length).to.equal(12);
        expect(pages[8].path).to.equal('about-us/people/index.html');
        expect(pages[8].body).to.match(/everyone/);
        expect(pages[9].path).to.equal('about-us/people/engineering/index.html');
        expect(pages[9].body).to.match(/engineering/);
        expect(pages[10].path).to.equal('about-us/people/leadership/index.html');
        expect(pages[10].body).to.match(/leadership/);
        expect(pages[11].path).to.equal('about-us/people/pm/index.html');
        expect(pages[11].body).to.match(/pm/);
      });
    });

    describe('with one UX & Designer', () => {
      it('should render one everyone and one ux-design', () => {
        const pages = compileSite({
          jobs: [],
          job: {},
          contactUsURL: '',
          featuredBlogPosts: [],
          events: [],
          event: {},
          badgers: [
            {
              firstName: 'Sari',
              lastName: 'Griffiths',
              categories: [
                { name: 'UX & Design', slug: 'ux-design' },
              ],
            },
          ],
          categories: [
            { name: 'UX & Design', slug: 'ux-design' },
          ],
        });

        expect(pages.length).to.equal(10);
        expect(pages[8].path).to.equal('about-us/people/index.html');
        expect(pages[8].body).to.match(/everyone/);
        expect(pages[9].path).to.equal('about-us/people/ux-design/index.html');
        expect(pages[9].body).to.match(/ux-design/);
      });
    });

    describe('with 21 Engineers and 1 Leadership', () => {
      it('should render two everyone pages, two engineering and one leadership', () => {
        const badgers = [];
        for (let i = 0; i < 20; i += 1) {
          badgers.push({
            firstName: 'Alex ' + i,
            lastName: 'Savin',
            categories: [
              { name: 'Engineering', slug: 'engineering' },
              { name: 'Leadership', slug: 'leadership' },
            ],
          });
        }
        const pages = compileSite({
          jobs: [],
          job: {},
          contactUsURL: '',
          featuredBlogPosts: [],
          events: [],
          event: {},
          badgers: badgers.concat([
            {
              firstName: 'Etiene',
              lastName: 'Dalcol',
              categories: [
                { name: 'Engineering', slug: 'engineering' },
              ],
            },
          ]),
          categories: [
            { name: 'Engineering', slug: 'engineering' },
            { name: 'Leadership', slug: 'leadership' },
          ],
        });

        expect(pages.length).to.equal(13);
        expect(pages[8].path).to.equal('about-us/people/index.html');
        expect(pages[8].body).to.match(/everyone/);
        expect(pages[9].path).to.equal('about-us/people/everyone/2/index.html');
        expect(pages[9].body).to.match(/everyone/);
        expect(pages[10].path).to.equal('about-us/people/engineering/index.html');
        expect(pages[10].body).to.match(/engineering/);
        expect(pages[11].path).to.equal('about-us/people/engineering/2/index.html');
        expect(pages[11].body).to.match(/engineering/);
        expect(pages[12].path).to.equal('about-us/people/leadership/index.html');
        expect(pages[12].body).to.match(/leadership/);
      });
    });

    describe('with 20 Engineers', () => {
      it('should render two everyone pages, including advert, and one for engineering', () => {
        const badgers = [];
        for (let i = 0; i < 20; i += 1) {
          badgers.push({
            firstName: 'Alex ' + i,
            lastName: 'Savin',
            categories: [
              { name: 'Engineering', slug: 'engineering' },
            ],
          });
        }
        const pages = compileSite({
          jobs: [],
          job: {},
          contactUsURL: '',
          featuredBlogPosts: [],
          events: [],
          event: {},
          badgers,
          categories: [
            { name: 'Engineering', slug: 'engineering' },
          ],
        });

        expect(pages.length).to.equal(11);
        expect(pages[8].path).to.equal('about-us/people/index.html');
        expect(pages[8].body).to.match(/everyone/);
        expect(pages[9].path).to.equal('about-us/people/everyone/2/index.html');
        expect(pages[9].body).to.match(/everyone/);
        expect(pages[10].path).to.equal('about-us/people/engineering/index.html');
        expect(pages[10].body).to.match(/engineering/);
      });
    });
  });

  describe('with 19 Engineers', () => {
    it('should render one everyone pages, even including advert, and one for engineering', () => {
      const badgers = [];
      for (let i = 0; i < 19; i += 1) {
        badgers.push({
          firstName: 'Alex ' + i,
          lastName: 'Savin',
          categories: [
            { name: 'Engineering', slug: 'engineering' },
          ],
        });
      }
      const pages = compileSite({
        jobs: [],
        job: {},
        contactUsURL: '',
        featuredBlogPosts: [],
        events: [],
        event: {},
        badgers,
        categories: [
          { name: 'Engineering', slug: 'engineering' },
        ],
      });

      expect(pages.length).to.equal(10);
      expect(pages[8].path).to.equal('about-us/people/index.html');
      expect(pages[8].body).to.match(/everyone/);
      expect(pages[9].path).to.equal('about-us/people/engineering/index.html');
      expect(pages[9].body).to.match(/engineering/);
    });
  });

  describe('with 41 Engineers and Leaderships', () => {
    it('should render three everyone pages and three for engineering and three for leadership', () => {
      const badgers = [];
      for (let i = 0; i < 41; i += 1) {
        badgers.push({
          firstName: 'Alex ' + i,
          lastName: 'Savin',
          categories: [
            { name: 'Engineering', slug: 'engineering' },
            { name: 'Leadership', slug: 'leadership' },
          ],
        });
      }
      const pages = compileSite({
        jobs: [],
        job: {},
        contactUsURL: '',
        featuredBlogPosts: [],
        events: [],
        event: {},
        badgers,
        categories: [
          { name: 'Engineering', slug: 'engineering' },
          { name: 'Leadership', slug: 'leadership' },
        ],
      });

      expect(pages.length).to.equal(17);
      expect(pages[8].path).to.equal('about-us/people/index.html');
      expect(pages[8].body).to.match(/everyone/);
      expect(pages[9].path).to.equal('about-us/people/everyone/2/index.html');
      expect(pages[9].body).to.match(/everyone/);
      expect(pages[10].path).to.equal('about-us/people/everyone/3/index.html');
      expect(pages[10].body).to.match(/everyone/);
      expect(pages[11].path).to.equal('about-us/people/engineering/index.html');
      expect(pages[11].body).to.match(/engineering/);
      expect(pages[12].path).to.equal('about-us/people/engineering/2/index.html');
      expect(pages[12].body).to.match(/engineering/);
      expect(pages[13].path).to.equal('about-us/people/engineering/3/index.html');
      expect(pages[13].body).to.match(/engineering/);
      expect(pages[14].path).to.equal('about-us/people/leadership/index.html');
      expect(pages[14].body).to.match(/leadership/);
      expect(pages[15].path).to.equal('about-us/people/leadership/2/index.html');
      expect(pages[15].body).to.match(/leadership/);
      expect(pages[16].path).to.equal('about-us/people/leadership/3/index.html');
      expect(pages[16].body).to.match(/leadership/);
    });
  });

  describe('with 41 Engineers and 21 Leaderships', () => {
    it('should render three everyone pages and three for engineering and two for leadership', () => {
      const badgers = [];
      for (let i = 0; i < 21; i += 1) {
        badgers.push({
          firstName: 'Alex ' + i,
          lastName: 'Savin',
          categories: [
            { name: 'Engineering', slug: 'engineering' },
            { name: 'Leadership', slug: 'leadership' },
          ],
        });
      }
      for (let i = 21; i < 41; i += 1) {
        badgers.push({
          firstName: 'Alex ' + i,
          lastName: 'Savin',
          categories: [
            { name: 'Engineering', slug: 'engineering' },
          ],
        });
      }
      const pages = compileSite({
        jobs: [],
        job: {},
        contactUsURL: '',
        featuredBlogPosts: [],
        events: [],
        event: {},
        badgers,
        categories: [
          { name: 'Engineering', slug: 'engineering' },
          { name: 'Leadership', slug: 'leadership' },
        ],
      });

      expect(pages.length).to.equal(16);
      expect(pages[8].path).to.equal('about-us/people/index.html');
      expect(pages[8].body).to.match(/everyone/);
      expect(pages[9].path).to.equal('about-us/people/everyone/2/index.html');
      expect(pages[9].body).to.match(/everyone/);
      expect(pages[10].path).to.equal('about-us/people/everyone/3/index.html');
      expect(pages[10].body).to.match(/everyone/);
      expect(pages[11].path).to.equal('about-us/people/engineering/index.html');
      expect(pages[11].body).to.match(/engineering/);
      expect(pages[12].path).to.equal('about-us/people/engineering/2/index.html');
      expect(pages[12].body).to.match(/engineering/);
      expect(pages[13].path).to.equal('about-us/people/engineering/3/index.html');
      expect(pages[13].body).to.match(/engineering/);
      expect(pages[14].path).to.equal('about-us/people/leadership/index.html');
      expect(pages[14].body).to.match(/leadership/);
      expect(pages[15].path).to.equal('about-us/people/leadership/2/index.html');
      expect(pages[15].body).to.match(/leadership/);
    });
  });
});
