import marked from 'marked';
import fetch from 'node-fetch';
import handleErrors from './handle-errors';

const badgerBrainEndpoint = process.env.BADGER_BRAIN_HOST;

const getRequestOptions = (body, token) => ({
  method: 'POST',
  headers: Object.assign(
    {},
    {
      'Content-Type': 'application/graphql',
    },
    token && {
      'X-Preview': token,
    },
  ),
  timeout: 10000,
  body,
});

const sortEvents = list =>
  list.sort((a, b) => new Date(b.startDateTime.iso) - new Date(a.startDateTime.iso));

const selectValidEvents = list =>
  list.filter(listItem => !!listItem.startDateTime && !!listItem.startDateTime.iso);

const prepareEventsBodyHtml = list =>
  list.map(event => ({
    ...event,
    body: event.body.map(part => ({
      ...part,
      text: marked(part.text),
    })),
  }));

const getCategories = badgers => {
  const categoriesObj = badgers.reduce(
    (uniqueCategories, badger) =>
      badger.categories.reduce((categories, category) => {
        return categories[category.name]
          ? categories
          : { ...categories, [category.name]: category };
      }, uniqueCategories),
    {},
  );
  return Object.keys(categoriesObj)
    .map(name => ({ name, slug: categoriesObj[name].slug }))
    .sort((catA, catB) => categoriesObj[catA.name].order - categoriesObj[catB.name].order);
};

// Randomize array, taken from http://stackoverflow.com/a/2450976/1310468
const shuffle = array => {
  const arr = [...array];
  let currentIndex = arr.length;
  let randomIndex;
  let temporaryValue;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = arr[currentIndex];
    arr[currentIndex] = arr[randomIndex];
    arr[randomIndex] = temporaryValue;
  }
  return arr;
};

const sortBadgers = badgers => {
  const orderableBadgers = badgers.filter(badger => badger.order !== null);
  const randomBadgers = badgers.filter(badger => badger.order === null);
  return orderableBadgers
    .sort((badgerA, badgerB) => badgerA.order - badgerB.order)
    .concat(shuffle(randomBadgers));
};

const selectValidQandAs = qAndAs => {
  return qAndAs
    .map(category => ({
      ...category,
      topics: category.topics
        .filter(topic => topic.answer && topic.question)
        .sort((topA, topB) => topA.order - topB.order),
    }))
    .filter(category => category.name && category.topics.length)
    .sort((catA, catB) => catA.order - catB.order);
};

const basicFields = `
  id
  slug
  tags
  title
  strapline
  internalLinks {
    title
    url
  }
  externalLinks {
    title
    url
  }
  body {
    type
    text
  }
  featureImageFilename
`;

const dateTimeFields = `
  iso
  date
  month
  monthSym
  year
`;

const dateTimeFieldsEvents = `
  startDateTime {
    ${dateTimeFields}
  }
  endDateTime {
    ${dateTimeFields}
  }
`;

const fullEventsQuery = `
  ${basicFields}
  ${dateTimeFieldsEvents}
  location {
    address
  }
`;

export function getData() {
  const body = `
    query {
      allEvents {
        ${fullEventsQuery}
      }
      allBadgers {
        firstName
        lastName
        order
        jobTitle
        primaryImageUrl
        secondaryImageUrl
        slug
        about
        skills
        achievements
        influence
        linkedin
        twitter
        github
        categories {
          name
          slug
          order
        }
      }
      allQnA {
        slug
        name
        topics {
          slug
          question
          answer
          order
        }
        order
      }
      eventsBanner {
        url
        altText
        campaignName
        desktopURL
        tabletURL
        mobileURL
      }
    }
  `;

  return fetch(badgerBrainEndpoint, getRequestOptions(body))
    .then(handleErrors)
    .then(response => response.json())
    .then(({ data: { allEvents, allBadgers, allQnA, eventsBanner } }) => ({
      events: sortEvents(prepareEventsBodyHtml(selectValidEvents(allEvents))),
      badgers: sortBadgers(allBadgers),
      categories: getCategories(allBadgers),
      qAndAs: selectValidQandAs(allQnA),
      eventsBanner,
    }));
}
