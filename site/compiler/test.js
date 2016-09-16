import compileSite from '.';

describe('site/compiler', () => {
  it('forms an array of pagessite/compiler', () => {
    const pages = compileSite();
    expect(pages.length).to.be.above(0);
    // TODO
  });
});
