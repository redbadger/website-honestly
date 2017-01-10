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

  describe('compileSite', () => {
    it('renders the dynamic badger pages of the site', () => {
      const pages = compileSite({
        ...baseState,
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
      expect(pages[8].body).to.match(/Alex/);
      expect(pages[9].path).to.equal('about-us/people/1/engineering/index.html');
      expect(pages[9].body).to.match(/Alex/);
      expect(pages[10].path).to.equal('about-us/people/1/leadership/index.html');
      expect(pages[10].body).to.match(/Alex/);
    });

    describe('with engineer, leadership and pm', () => {
      it('should render one page of each and everyone', () => {
        const pages = compileSite({
          ...baseState,
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
        expect(pages[8].body).to.match(/Alex/);
        expect(pages[8].body).to.match(/Sari/);
        expect(pages[9].path).to.equal('about-us/people/1/engineering/index.html');
        expect(pages[9].body).to.match(/Alex/);
        expect(pages[9].body).to.not.match(/Sari/);
        expect(pages[10].path).to.equal('about-us/people/1/leadership/index.html');
        expect(pages[10].body).to.match(/Sari/);
        expect(pages[10].body).to.match(/Alex/);
        expect(pages[11].path).to.equal('about-us/people/1/pm/index.html');
        expect(pages[11].body).to.match(/Sari/);
        expect(pages[11].body).to.not.match(/Alex/);
      });
    });

    describe('with one UX & Designer', () => {
      it('should render one everyone and one ux-design', () => {
        const pages = compileSite({
          ...baseState,
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
        expect(pages[8].body).to.match(/Sari/);
        expect(pages[9].path).to.equal('about-us/people/1/ux-design/index.html');
        expect(pages[9].body).to.match(/Sari/);
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
          ...baseState,
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
        expect(pages[8].body).to.match(/Alex 1/);
        expect(pages[8].body).to.match(/Alex 19/);
        expect(pages[8].body).to.not.match(/Etiene/);
        expect(pages[9].path).to.equal('about-us/people/2/index.html');
        expect(pages[9].body).to.match(/Etiene/);
        expect(pages[9].body).to.not.match(/Alex 19/);
        expect(pages[10].path).to.equal('about-us/people/1/engineering/index.html');
        expect(pages[10].body).to.match(/Alex 1/);
        expect(pages[10].body).to.match(/Alex 19/);
        expect(pages[10].body).to.not.match(/Etiene/);
        expect(pages[11].path).to.equal('about-us/people/2/engineering/index.html');
        expect(pages[11].body).to.match(/Etiene/);
        expect(pages[11].body).to.not.match(/Alex 19/);
        expect(pages[12].path).to.equal('about-us/people/1/leadership/index.html');
        expect(pages[12].body).to.match(/leadership/i);
        expect(pages[12].body).to.match(/Alex 1/);
        expect(pages[12].body).to.match(/Alex 19/);
        expect(pages[12].body).to.not.match(/Etiene/);
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
          ...baseState,
          badgers,
          categories: [
            { name: 'Engineering', slug: 'engineering' },
          ],
        });

        expect(pages.length).to.equal(11);
        expect(pages[8].path).to.equal('about-us/people/index.html');
        expect(pages[8].body).to.match(/everyone/i);
        expect(pages[9].path).to.equal('about-us/people/2/index.html');
        expect(pages[9].body).to.match(/everyone/i);
        expect(pages[10].path).to.equal('about-us/people/1/engineering/index.html');
        expect(pages[10].body).to.match(/engineering/i);
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
        ...baseState,
        badgers,
        categories: [
          { name: 'Engineering', slug: 'engineering' },
        ],
      });

      expect(pages.length).to.equal(10);
      expect(pages[8].path).to.equal('about-us/people/index.html');
      expect(pages[8].body).to.match(/everyone/i);
      expect(pages[9].path).to.equal('about-us/people/1/engineering/index.html');
      expect(pages[9].body).to.match(/engineering/i);
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
        ...baseState,
        badgers,
        categories: [
          { name: 'Engineering', slug: 'engineering' },
          { name: 'Leadership', slug: 'leadership' },
        ],
      });

      expect(pages.length).to.equal(17);
      expect(pages[8].path).to.equal('about-us/people/index.html');
      expect(pages[8].body).to.match(/everyone/i);
      expect(pages[9].path).to.equal('about-us/people/2/index.html');
      expect(pages[9].body).to.match(/everyone/i);
      expect(pages[10].path).to.equal('about-us/people/3/index.html');
      expect(pages[10].body).to.match(/everyone/i);
      expect(pages[11].path).to.equal('about-us/people/1/engineering/index.html');
      expect(pages[11].body).to.match(/engineering/i);
      expect(pages[12].path).to.equal('about-us/people/2/engineering/index.html');
      expect(pages[12].body).to.match(/engineering/i);
      expect(pages[13].path).to.equal('about-us/people/3/engineering/index.html');
      expect(pages[13].body).to.match(/engineering/i);
      expect(pages[14].path).to.equal('about-us/people/1/leadership/index.html');
      expect(pages[14].body).to.match(/leadership/i);
      expect(pages[15].path).to.equal('about-us/people/2/leadership/index.html');
      expect(pages[15].body).to.match(/leadership/i);
      expect(pages[16].path).to.equal('about-us/people/3/leadership/index.html');
      expect(pages[16].body).to.match(/leadership/i);
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
        ...baseState,
        badgers,
        categories: [
          { name: 'Engineering', slug: 'engineering' },
          { name: 'Leadership', slug: 'leadership' },
        ],
      });

      expect(pages.length).to.equal(16);
      expect(pages[8].path).to.equal('about-us/people/index.html');
      expect(pages[8].body).to.match(/everyone/i);
      expect(pages[9].path).to.equal('about-us/people/2/index.html');
      expect(pages[9].body).to.match(/everyone/i);
      expect(pages[10].path).to.equal('about-us/people/3/index.html');
      expect(pages[10].body).to.match(/everyone/i);
      expect(pages[11].path).to.equal('about-us/people/1/engineering/index.html');
      expect(pages[11].body).to.match(/engineering/i);
      expect(pages[12].path).to.equal('about-us/people/2/engineering/index.html');
      expect(pages[12].body).to.match(/engineering/i);
      expect(pages[13].path).to.equal('about-us/people/3/engineering/index.html');
      expect(pages[13].body).to.match(/engineering/i);
      expect(pages[14].path).to.equal('about-us/people/1/leadership/index.html');
      expect(pages[14].body).to.match(/leadership/i);
      expect(pages[15].path).to.equal('about-us/people/2/leadership/index.html');
      expect(pages[15].body).to.match(/leadership/i);
    });
  });
});
