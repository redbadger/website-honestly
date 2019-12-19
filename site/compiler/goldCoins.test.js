import createStateNavigator from '../routes';
import { expandRoutes } from '.';

describe('site/compiler', () => {
  const categories = [
    { name: 'Engineering', slug: 'engineering' },
    { name: 'Leadership', slug: 'leadership' },
  ];

  const baseState = {
    jobs: [],
    jobLookup: {},
    events: [],
    eventLookup: {},
    categories,
    instagramPosts: [],
    tweets: [],
    badgers: [
      {
        firstName: 'Alex',
        slug: 'alex',
        categories,
      },
    ],
    badgerLookup: { alex: 0 },
    goldCoinPages: [],
  };

  const testGoldCoinPage = {
    slug: 'test',
    title: 'test',
    subTitle: 'test',
    headerImage: 'https://www.example.com/test.jpg',
    headerAlt: 'test',
    duration: 'test',
    price: 'test',
    type: 'test',
    location: 'test',
    whatIsIt: '<p>test</p>',
    whoIsItFor: '<p>test</p>',
    whatWillYouLearn: '<p>test</p>',
    whoWillRun: '<p>test</p>',
    consultants: ['test', 'test', 'test'],
    hubspotForm: {
      portalId: 1111111,
      guid: 'test',
      name: 'test',
      cssClass: 'test',
      submitText: 'test',
      inlineMessage: 'test',
      formFields: [
        {
          name: 'test',
          label: 'test',
          fieldType: 'test',
          required: true,
          enabled: true,
          hidden: false,
          labelHidden: false,
        },
      ],
    },
  };

  describe('compileSite', () => {
    it('renders the dynamic gold coin pages of the site', () => {
      const routes = expandRoutes(
        {
          ...baseState,
          goldCoinPages: [testGoldCoinPage],
        },
        createStateNavigator(),
      );

      const filePaths = routes.map(r => r.filePath);

      expect(filePaths).toEqual(
        expect.arrayContaining(['what-we-do/experience-us/test/index.html']),
      );
    });

    it('should render multiple gold coin pages', () => {
      const a = {
        title: 'test-2',
        slug: 'test-2',
      };

      const routes = expandRoutes(
        {
          ...baseState,
          goldCoinPages: [testGoldCoinPage, a],
        },
        createStateNavigator(),
      );

      const filePaths = routes.map(r => r.filePath);

      expect(filePaths).toEqual(
        expect.arrayContaining([
          'what-we-do/experience-us/test/index.html',
          'what-we-do/experience-us/test-2/index.html',
        ]),
      );
    });
  });
});
