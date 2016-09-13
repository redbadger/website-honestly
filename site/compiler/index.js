const pages = [
  {
    path: 'index.html',
    content: 'Published at ' + (new Date().toString()),
  },
  {
    path: '404.html',
    content: 'Not found :(',
  },
];

module.exports = function compileSite(_data) {
  return pages;
};
