// @flow
import { stateToBadgerProps, genBadgersParams, getBadgersTitle } from './selectors';

type RouteDefinition = {|
  title: string | ((props: Object) => string),
  description?: string,
  key: string,
  route: string,
  defaults?: any,
  stateToProps?: (state: Object, params?: Object) => any,
  gen?: (state: Object) => Array<Object>,
  parentKey?: string,
  noLayout?: boolean,
  ampPageType?: string,
  ampPageProperties?: {
    [string]: string,
  },
|};

const getGoldCoinConsultants = (consultants, badgers) => {
  // the 'consultants' data comes in from badger brain as an array of slugs.
  // the slugs themselves are provided in prismic from the same records as the
  // badger profiles. So rather than bload the site state with duplicates of said profiles
  // We can retrieve them from the already fetched state here by matching slugs.
  return consultants
    .map(consultant => {
      let matchedBadger = badgers.find(badger => badger.slug === consultant);
      if (matchedBadger) {
        const { firstName, lastName, slug, primaryImageUrl, jobTitle } = matchedBadger;
        matchedBadger = {
          name: `${firstName} ${lastName}`,
          image: primaryImageUrl,
          role: jobTitle,
          profileUrl: `/people/${slug}`,
        };
      }
      return matchedBadger;
    })
    .filter(consultant => !!consultant);
};

const getGoldCoinPreviews = (goldCoinPages, currentPageSlug) => {
  // Like the above case for the consultants, there is no point in duplicating records
  // This function generates and collates the data for three random previews
  // that are shown at the bottom of a gold coin page.
  // First we remove the current page from the pool of pages
  // Then we shuffle them up,
  // We slice off 3 at random
  // and maps those into an array of usable previews.
  return goldCoinPages
    .filter(page => page.slug !== currentPageSlug)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3)
    .map(preview => {
      return {
        image: preview.headerImage,
        title: preview.title,
        subTitle: preview.subTitle,
        url: `/experience-us/${preview.slug}`,
        duration: preview.duration,
        alt: preview.headerAlt,
        type: preview.type,
      };
    });
};

export const routeDefinitions: Array<RouteDefinition> = [
  {
    title: 'Home',
    description:
      'Let’s make things better. We’re digital transformation experts who innovate and deliver. We solve complex problems and deliver real impact.',
    key: 'homePage',
    route: '',
    defaults: { contactUs: false },
    ampPageType: 'home',
  },
  {
    title: 'What we do',
    description:
      'We help you bring innovative products and services to market through flexible lean agile processes.',
    key: 'whatWeDoPage',
    route: 'what-we-do',
  },
  {
    title: 'Our work',
    description:
      'We thrive on complex business problems and are experts in retail, media and financial services.',
    key: 'ourWorkPage',
    route: 'our-work',
    parentKey: 'whatWeDoPage',
  },
  {
    title: 'About us',
    description:
      'Founded by Cain, Dave and Stu in 2010, we’re an award winning independently owned consultancy who believe in doing the right thing and doing the thing right.',
    key: 'aboutUsPage',
    route: 'about-us',
    stateToProps: ({ tweets, instagramPosts, qAndAs }) => ({
      tweets,
      instagramPosts,
      qAndAs,
    }),
  },
  {
    title: 'Join us',
    description:
      'We’re a Sunday Times 100 Best Small Company to Work For 2018 and looking for the best talent to join our team. ',
    key: 'joinUs',
    route: 'jobs',
    stateToProps: ({ jobs }) => ({ jobs }),
  },
  {
    title: 'Experience Red Badger',
    description:
      'We’re a Sunday Times 100 Best Small Company to Work For 2018 and looking for the best talent to join our team. ',
    key: 'experienceUs',
    route: 'experience-us',
    stateToProps: ({ goldCoinPages }) => ({ goldCoinPages }),
  },
  {
    title: ({ job }) => job.title,
    key: 'job',
    route: 'jobs/{slug}',
    stateToProps: (state, params = {}) => ({
      job: state.jobs[state.jobLookup[params.slug]],
    }),
    gen: state => state.jobs.map(({ slug }) => ({ slug })),
    parentKey: 'joinUs',
    ampPageType: 'job',
    ampPageProperties: {
      jobTitle: '{slug}',
    },
  },
  {
    title: 'Events',
    description:
      'Upcoming events including WeLove_Tech, React London Community, UXD exchange and more.',
    key: 'events',
    route: 'events',
    stateToProps: ({ events, eventsBanner }) => ({ events, eventsBanner }),
  },
  {
    title: ({ event }) => event.title,
    key: 'event',
    route: 'events/{year}/{month}/{date}/{slug}',
    description:
      'Upcoming events including WeLove_Tech, React London Community, UXD exchange and more.',
    stateToProps: (state, params = {}) => ({
      event: state.events[state.eventLookup[params.slug]],
    }),
    gen: state =>
      state.events.map(({ startDateTime: { date, month, year }, slug }) => ({
        date,
        month,
        year,
        slug,
      })),
    parentKey: 'events',
    ampPageType: 'event',
    ampPageProperties: {
      eventName: '{slug}',
    },
  },
  {
    title: getBadgersTitle,
    description:
      'Our guiding principles help our culture thrive as we grow over 100 people. We’re people people, honest, we find a way, we’re always learning and we’ve strong opinions weakly held.',
    key: 'badgers',
    route: 'people+/category/{category}+/page-{page}',
    defaults: { category: 'everyone', page: 1 },
    stateToProps: stateToBadgerProps,
    gen: genBadgersParams,
    parentKey: 'aboutUsPage',
    ampPageType: 'people',
    ampPageProperties: {
      peopleCategory: '{category}',
    },
  },
  {
    title: ({ badger }) => [badger.firstName, badger.lastName].join(' '),
    description: 'Signature skills and achievements - a profile page for Red Badger team member',
    key: 'badger',
    route: 'people/{slug}',
    stateToProps: (state, params = {}) => ({
      badger: state.badgers[state.badgerLookup[params.slug]],
    }),
    gen: state => state.badgers.map(({ slug }) => ({ slug })),
    parentKey: 'badgers',
    ampPageType: 'people',
    ampPageProperties: {
      badgerName: '{slug}',
    },
  },
  {
    title: 'Retailer case study',
    description:
      'Find out how we improved conversion rates by 83% with a mobile first application to the world’s 3rd largest retailer with speed to market.',
    key: 'retailerCaseStudy',
    route: 'our-work/case-study/retailer',
    parentKey: 'ourWorkPage',
    ampPageType: 'case-study',
    ampPageProperties: {
      caseStudyName: 'retailer',
    },
  },
  {
    title: 'Fortnum & Mason case study',
    description:
      'Increasing conversion rates, sales and mobile visits for Fortnum & Mason’s new, award winning website.',
    key: 'fortnumAndMasonCaseStudy',
    route: 'our-work/case-study/fortnum-and-mason',
    parentKey: 'ourWorkPage',
    ampPageType: 'case-study',
    ampPageProperties: {
      caseStudyName: 'fortnum-and-mason',
    },
  },
  {
    title: 'Fortnum & Mason digital transformation',
    description:
      'The ongoing digital transformation of a 310-year old retailer. Discover how we helped customers find products faster and drive sales of tea at Fortnum and Mason.',
    key: 'fMTeaCaseStudy',
    route: 'our-work/case-study/fortnum-and-mason-digital-transformation',
    parentKey: 'ourWorkPage',
    ampPageType: 'case-study',
    ampPageProperties: {
      caseStudyName: 'fortnum-and-mason-digital-transformation',
    },
  },
  {
    title: 'Financial Times case study',
    description: 'Discover how we increased reader engagement by 30% at FT.com',
    key: 'financialTimesCaseStudy',
    route: 'our-work/case-study/financial-times',
    parentKey: 'ourWorkPage',
    ampPageType: 'case-study',
    ampPageProperties: {
      caseStudyName: 'financial-times',
    },
  },
  {
    title: 'BMW Virtual Museum case study',
    description:
      'Find out how we pushed the boundaries of HTML5 technology to deliver a multiplatform 3D tour of the BMW museum.',
    key: 'bmwCaseStudy',
    route: 'our-work/case-study/bmw',
    parentKey: 'ourWorkPage',
    ampPageType: 'case-study',
    ampPageProperties: {
      caseStudyName: 'bmw',
    },
  },
  {
    title: 'BBC Now case study',
    description:
      'Discover how a rapid prototyping model helped the BBC uncover new ways to engage its audience.',
    key: 'bbcCaseStudy',
    route: 'our-work/case-study/bbc-now',
    parentKey: 'ourWorkPage',
    ampPageType: 'case-study',
    ampPageProperties: {
      caseStudyName: 'bbc-now',
    },
  },
  {
    title: 'Haller Foundation case study',
    description:
      'Discover how we’ve helped Haller develop a mobile application to help Kenyan farmers using technology for good',
    key: 'hallerCaseStudy',
    route: 'our-work/case-study/haller',
    parentKey: 'ourWorkPage',
    ampPageType: 'case-study',
    ampPageProperties: {
      caseStudyName: 'haller',
    },
  },
  {
    title: 'Sky CMS case study',
    description:
      'Find out how we helped Sky build a modern CMS as a foundation that supports both customers and the internal team',
    key: 'skyCMSCaseStudy',
    route: 'our-work/case-study/sky-cms',
    parentKey: 'ourWorkPage',
    ampPageType: 'case-study',
    ampPageProperties: {
      caseStudyName: 'sky-cms',
    },
  },
  {
    title: 'Sky case study',
    description:
      'Discover how we enabled Sky to deliver continual improvement across customer services.',
    key: 'skyCaseStudy',
    route: 'our-work/case-study/sky',
    parentKey: 'ourWorkPage',
  },
  {
    title: 'Bank case study',
    description:
      'Discover how we delivered quality digital products to customers quickly, built capability and changed the culture to increase business efficiency in one of the world’s largest banks.',
    key: 'bankCaseStudy',
    route: 'our-work/case-study/financial-services-digital-transformation',
    parentKey: 'ourWorkPage',
    ampPageType: 'case-study',
    ampPageProperties: {
      caseStudyName: 'financial-services-digital-transformation',
    },
  },
  {
    title: 'Camden market case study',
    description:
      'Built in 10 weeks, a new site for Camden Market to drive engagement with Londoners and Tourists.',
    key: 'camdenMarketCaseStudy',
    route: 'our-work/case-study/camden-market',
    parentKey: 'ourWorkPage',
    ampPageType: 'case-study',
    ampPageProperties: {
      caseStudyName: 'camden-market',
    },
  },
  {
    title: 'Creating complete CMS control',
    description:
      'Discover how we produced a working prototype within one week for a travel technology platform and went live within five months.',
    key: 'carTrawlerCaseStudy',
    route: 'our-work/case-study/car-trawler',
    parentKey: 'ourWorkPage',
    ampPageType: 'case-study',
    ampPageProperties: {
      caseStudyName: 'car-trawler',
    },
  },
  {
    title: 'Creating complete CMS control',
    description:
      'Discover how we produced a working prototype within one week for a travel technology platform and went live within five months.',
    key: 'carTrawlerMyAccountCaseStudy',
    route: 'our-work/case-study/car-trawler-my-account',
    parentKey: 'ourWorkPage',
    ampPageType: 'case-study',
    ampPageProperties: {
      caseStudyName: 'car-trawler-my-account',
    },
  },
  {
    title:
      'A labour of love – delivering a flagship, best-in-class digital experience for the Pride in London community',
    description:
      'Find out how we used React Native to deliver a 5 star mobile app across two platforms working as a cross-functional volunteer team.',
    key: 'prideCaseStudy',
    route: 'our-work/case-study/pride',
    parentKey: 'ourWorkPage',
    ampPageType: 'case-study',
    ampPageProperties: {
      caseStudyName: 'pride',
    },
  },
  {
    title: 'Fidelity International case study',
    description: 'This is the Fidelity case study',
    key: 'fidelityCaseStudy',
    route: 'our-work/case-study/fidelity',
    parentKey: 'ourWorkPage',
    ampPageType: 'case-study',
    ampPageProperties: {
      caseStudyName: 'fidelity',
    },
  },
  {
    title: 'Technology',
    description:
      'We choose the right tech for the job and with meticulous engineering practices we enable continuous delivery, speed to market and create value for customers quickly.',
    key: 'technology',
    route: 'technology',
    stateToProps: ({ triedAndTestedBlogPosts, growingTrendsBlogPosts }) => ({
      triedAndTestedBlogPosts,
      growingTrendsBlogPosts,
    }),
    parentKey: 'whatWeDoPage',
  },
  {
    title: ({ title }) => title,
    description: 'The value that Red Badger offers - a page for a specific Red Badger engagement',
    key: 'goldCoinPage',
    route: 'experience-us/{slug}',
    stateToProps: ({ badgers, goldCoinPages }, params = {}) => {
      if (goldCoinPages) {
        // find page that matches passed in slug.
        const pageData = goldCoinPages.find(page => page.slug === params.slug);
        if (pageData) {
          if (pageData.consultants) {
            pageData.consultants = getGoldCoinConsultants(pageData.consultants, badgers);
          }
          pageData.previews = getGoldCoinPreviews(goldCoinPages, pageData.slug);
          return { ...pageData };
        }
      }
    },
    gen: state => state.goldCoinPages.map(({ slug }) => ({ slug })),
  },
  {
    title: 'Not found',
    key: 'notFoundPage',
    route: '404',
    ampPageType: 'error-page',
    ampPageProperties: {
      errorPageCode: '404',
    },
  },
  {
    title: 'Cookie Policy',
    key: 'cookiePolicy',
    route: 'cookie-policy',
  },
  {
    title: 'Privacy Policy',
    key: 'privacyPolicy',
    route: 'privacy-policy',
  },
  {
    title: 'Terms and Conditions',
    key: 'termsAndConditions',
    route: 'terms-and-conditions',
  },
  {
    title: 'Server error',
    key: 'serverErrorPage',
    route: '50x',
    ampPageType: 'error-page',
    ampPageProperties: {
      errorPageCode: '50x',
    },
  },
  {
    title: 'Lost connection',
    key: 'offlinePage',
    route: 'offline',
  },
  {
    title: 'Browser not supported',
    key: 'browserNotSupported',
    route: 'browser-not-supported',
    noLayout: true,
  },
];
