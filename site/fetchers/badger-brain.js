import fetch from 'node-fetch';

const badgerBrainEndpoint = process.env.BADGER_BRAIN_HOST;

const getRequestOptions = (body, token) => ({
  method: 'POST',
  headers: Object.assign({}, {
    'Content-Type': 'application/graphql',
  }, token && {
    'X-Preview': token,
  }),
  body,
});

const sortEvents = (list) =>
  list.sort((a, b) =>
    new Date(b.startDateTime.iso) - new Date(a.startDateTime.iso));

export const selectValidEvents = (list) =>
  list.filter((listItem) => !!listItem.startDateTime &&
    !!listItem.startDateTime.iso);

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
`;

export function getEvents() {
  const body = `
    query {
      allEvents {
        ${fullEventsQuery}
      }
    }
  `;

  return fetch(badgerBrainEndpoint, getRequestOptions(body))
          .then((response) => response.json())
          .then((events) => sortEvents(selectValidEvents(events.data.allEvents)));
}
