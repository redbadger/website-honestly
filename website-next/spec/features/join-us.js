import chai from 'chai';

const browser = global.browser; // comes from wdio

describe('Looking for a new job', function () {
  it('User can select a job from the Join Us page and read its details', function (done) {
    browser
      .url('/about-us/join-us')
      .getTitle()
      .then(function (title) {
        chai.expect(title).to.equal('Join Us | Red Badger');
      })
      .click('.jobs a:first-of-type')
      .getText('h2')
      .then(function (title) {
        chai.expect(title).to.include('Software Engineer');
      })
      .getAttribute('#e2eApply', 'href')
      .then(function (attr) {
        return chai.expect(attr).to.include('workable.com');
      })
      .then(function () {
        done();
      });
  });
});
