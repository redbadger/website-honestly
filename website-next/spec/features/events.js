import chai from 'chai';

const browser = global.browser; // comes from wdio

/**
 * @TODO Investigate either setting up CouchDB with some initial events or move
 *       to a 3rd party CMS/events management system
 */
xdescribe('Checking for Events', () => {
  it('will be able to view upcoming events', (done) => {
    browser
    .url('/about-us/events')
    .getTitle()
    .then(title => {
      return chai.expect(title).to.equal('Events | Red Badger');
    })
    .then(() => {
      done();
    });
  });
});
