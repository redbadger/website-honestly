import fetch from 'node-fetch';
import { getJobs } from '../site/fetchers/workable';
import { getTweets } from '../site/fetchers/twitter';
import { getPosts } from '../site/fetchers/instagram';
import { getData } from '../site/fetchers/badger-brain';

// Static data until we wire this up to HB

const triedAndTestedBlogPosts = [
  {
    slug: '2018/4/19/moving-mountains-for-communities-in-kenya',
    category: 'Technology',
    title: 'Moving mountains for communities in Kenya',
    excerpt:
      "It's been three years since Red Badger launched the Haller app for the Haller Foundation. Read what we we've been up to so far.&nbsp;",
    date: '2018-04-26T12:20:02.406Z',
    author: {
      role: 'Badger blogger',
      name: 'Mike Altendorf',
    },
  },
  {
    slug: '2018/3/28/london-react-meetup-march-2018',
    category: 'Technology',
    title: 'London React Meetup - March 2018',
    excerpt:
      "This month's meetup was once again held at the Facebook office. With the pizza and drinks arriving in good time everyone tucked in and got chatting.",
    date: '2018-04-11T11:00:00.224Z',
    author: {
      role: 'Badger blogger',
      name: 'Tom Grimley',
    },
  },
  {
    slug: '2018/2/27/react-london-february',
    category: 'Technology',
    title: 'React London Meetup - February 2018',
    excerpt:
      'The February edition of React London brought us to the World Remit offices located between Westminster and Victoria. The sound of drinks and conversation filled the room but noticeably absent was the promised pizza.',
    date: '2018-02-27T12:00:00.126Z',
    author: {
      role: 'Badger blogger',
      name: 'Mark Holland',
    },
  },
  {
    slug: '2018/1/24/react-london-meetup-january-2018',
    category: 'Technology',
    title: 'React London Meetup - January 2018',
    excerpt:
      'We all gathered for this month’s React meetup in the new Facebook office at Rathbone Square. The amount of beer, pizza and interesting topics was tremendous.',
    date: '2018-01-25T12:01:20.989Z',
    author: {
      role: 'Software Engineer',
      name: 'Xavier Delamotte',
    },
  },
  {
    slug: 'how-to-make-an-accessible-address-finder',
    category: 'Technology',
    title: 'How to make an accessible address finder',
    excerpt:
      "Accessibility is a massive topic, and, if you are a developer who doesn't have much control over the designs, it can feel like a lot of it is out of your control.With a few simple coding changes, we can make our features accessible.&nbsp;In this blog post I will walk you through how I approach making an existing feature accessible in three steps.",
    date: '2017-10-02T13:07:00.585Z',
    author: {
      role: 'Badger blogger',
      name: 'Zoë Bryant',
    },
  },
];

const growingTrendsBlogPosts = [
  {
    slug: '2018/3/26/a-truly-serverless-web-a-fire-side-chat-with-viktor-and-paul-frazee',
    category: 'Technology',
    title: 'A fireside chat with Viktor Charypar and Paul Frazee',
    excerpt:
      "Last week we invited Paul Frazee, co-founder of Beaker Browser to speak at our very first We love meet up about peer to peer. Our Tech Lead Viktor&nbsp;&nbsp;'e-met' Paul via twitter when his blog 'The end of the cloud: A truly serverless web'&nbsp;went viral.&nbsp;We asked them to pick up their conversation about peer-to-peer and the end of the cloud in our Badger HQ so we could share their thoughts and opinions with you.",
    date: '2018-04-06T11:42:00.748Z',
    author: {
      role: 'Badger blogger',
      name: 'Red Badger Team',
    },
  },
  {
    slug: '2018/3/23/we-love-peer-to-peer',
    category: 'Technology',
    title: 'We love peer to peer web ',
    excerpt:
      'Last Wednesday, we hosted the first meetup under our new tech community brand welovetech.london. The idea is to host regular meetups, each with a different theme. The theme might be a particular framework or language or it could be something broader like “music and tech”.',
    date: '2018-04-03T11:00:00.885Z',
    author: {
      role: 'Badger blogger',
      name: 'Matt Paul',
    },
  },
  {
    slug: '2018/2/19/we-love-beta',
    category: 'Technology',
    title: 'We Love (beta)',
    excerpt: "How we're developing and road-testing a new brand for the tech community.",
    date: '2018-02-23T11:13:52.996Z',
    author: {
      role: 'Community Manager',
      name: 'Amy Crimmens',
    },
  },
  {
    slug:
      '2017/12/19/what-we-learnt-from-bimas-breakfast-briefing-the-top-tech-trends-that-really-matter-for-2018',
    category: 'Technology',
    title:
      'What we learnt from BIMA’s breakfast briefing: The Top Tech Trends That Really Matter For 2018',
    excerpt:
      'On 28th November, we went along to BIMA’s breakfast briefing on the Tech Trends that really matter for 2018, which saw six-minute talks from four speakers on their tech predictions for 2018 and beyond.',
    date: '2017-12-21T12:19:12.985Z',
    author: {
      role: 'Badger blogger',
      name: 'Red Badger Team',
    },
  },
  {
    slug: 'deploy-a-microservices-application-as-though-it-was-a-monolith',
    category: 'Technology',
    title:
      'Deploy a Microservices application as though it was a Monolith, from a Monorepo to a Microplatform...',
    excerpt:
      'You will know that the microservices pattern is very popular right now. For good reason, because it enables Evolutionary Architecture. Each service’s bounded context allows it to evolve on its own roadmap. This gives us great domain-based separation of concerns so we can move very quickly while being more scalable and highly available. When done properly.',
    date: '2017-09-29T14:53:45.289Z',
    author: {
      role: 'Chief Scientist and Founder',
      name: 'Stuart Harris',
    },
  },
];

const toLookupDict = (array, keyFn) =>
  array.reduce(
    (obj, item, index) => ({
      ...obj,
      [keyFn(item)]: index,
    }),
    {},
  );

const getSiteState = () =>
  Promise.all([
    getJobs(fetch, process.env.WORKABLE_API_KEY),
    getTweets(fetch, process.env.TWITTER_KEY, process.env.TWITTER_SECRET),
    getPosts(fetch),
    getData(),
  ]).then(([jobs, tweets, instagramPosts, data]) => ({
    jobs,
    triedAndTestedBlogPosts,
    growingTrendsBlogPosts,
    tweets,
    instagramPosts,
    jobLookup: toLookupDict(jobs, j => j.slug),
    events: data.events,
    eventsBanner: data.eventsBanner[0],
    eventLookup: toLookupDict(data.events, e => e.slug),
    badgers: data.badgers,
    badgerLookup: toLookupDict(data.badgers, b => b.slug),
    categories: data.categories,
    qAndAs: data.qAndAs,
  }));

export default getSiteState;
