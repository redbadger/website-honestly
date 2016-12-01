const badgerBrainEndpoint = process.env.BADGER_BRAIN_HOST;

const getRequestOptions = (req, body) => ({
  method: 'POST',
  headers: Object.assign({}, {
    'Content-Type': 'application/graphql',
  }, req.query.token && {
    'X-Preview': req.query.token,
  }),
  body,
});

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

const dateTimeFieldsNews = `
  datetime {
    ${dateTimeFields}
  }
`;

const fullEventsQuery = `
  ${basicFields}
  ${dateTimeFieldsEvents}
`;

const fullNewsQuery = `
  ${basicFields}
  ${dateTimeFieldsNews}
`;

export const selectValidEvents = (list) =>
  list.filter((listItem) => !!listItem.startDateTime &&
    !!listItem.startDateTime.iso);

const sortNews = (list) =>
  list.sort((a, b) =>
    new Date(b.datetime.iso) - new Date(a.datetime.iso));

const sortEvents = (list) =>
  list.sort((a, b) =>
    new Date(b.startDateTime.iso) - new Date(a.startDateTime.iso));

const sendError = (res, err) =>
  res.status(err.status).send(err.message);

export function getNewsItem(req, res) {
  const body = `
    query {
      news(id: "${req.params.id}") {
        ${fullNewsQuery}
      }
    }
  `;

  fetch(badgerBrainEndpoint, getRequestOptions(req, body))
    .then((response) => response.json())
    .then((json) =>
        res.send(json.data ? json.data.news : json)
    .catch((err) =>
      sendError(res, err)
    ));
}

export function getNews(req, res) {
  const body = `
    query {
      allNews {
        ${fullNewsQuery}
      }
    }
  `;

  fetch(badgerBrainEndpoint, getRequestOptions(req, body))
    .then((response) => response.json())
    .then((news) =>
      res.send({ list: sortNews(news.data.allNews) })
    .catch((err) => {
      sendError(res, err);
    }));
}

export function getEvent(req, res) {
  const body = `
    query {
      event(id: "${req.params.id}") {
        ${fullEventsQuery}
      }
    }
  `;

  fetch(badgerBrainEndpoint, getRequestOptions(req, body))
    .then((response) => {
      response.json().then((json) => {
        res.send(json.data ? json.data.event : json);
      });
    })
    .catch((err) => {
      sendError(res, err);
    });
}

export function getEvents(req, res) {
  const body = `
    query {
      allEvents {
        ${fullEventsQuery}
      }
    }
  `;

  fetch(badgerBrainEndpoint, getRequestOptions(req, body))
    .then((response) => response.json())
    .then((events) => {
      res.send({ list: sortEvents(selectValidEvents(events.data.allEvents)) });
    })
    .catch((err) => {
      sendError(res, err);
    });
}

export function getTags(req, res) {
  const body = `
    query {
      allEvents {
        ${fullEventsQuery}
      }
      allNews {
        ${fullNewsQuery}
      }
    }
  `;

  fetch(badgerBrainEndpoint, getRequestOptions(req, body))
    .then((response) => response.json())
    .then((tags) => {
      res.send({
        events: {
          list: sortEvents(tags.data.allEvents),
        },
        news: {
          list: sortNews(tags.data.allNews),
        },
      });
    })
    .catch((err) => {
      sendError(res, err);
    });
}
