const pages = [
  {
    Key: 'index.html',
    Body: 'Published at ' + (new Date().toString()),
    ContentType: 'text/html',
  },
  {
    Key: 'error.html',
    Body: 'Error :(',
    ContentType: 'text/html',
  },
]

module.exports = function compileSite() {
  return new Promise((resolve) => {
    resolve(pages);
  })
}
