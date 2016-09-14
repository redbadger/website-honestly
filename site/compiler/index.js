const pages = [
  {
    path: 'index.html',
    body: 'Published at ' + (new Date().toString()),
  },
  {
    path: '404.html',
    body: 'Not found :(',
  },
];

module.exports = function compileSite(_data) {
  return pages;
};
