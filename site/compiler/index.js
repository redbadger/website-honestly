const pages = [
  {
    Key: 'index.html',
    Body: 'Published at ' + (new Date().toString()),
    ContentType: 'text/html',
  },
  {
    Key: '404.html',
    Body: 'Not found :(',
    ContentType: 'text/html',
  },
];

module.exports = function compileSite(_data) {
  return pages;
};
