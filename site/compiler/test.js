import React from 'react';
import { Route, Router, browserHistory } from 'react-router';
import { compileSite, compileRoutes } from '.';

describe('site/compiler', () => {
  describe('compileSite', () => {
    it('renders all the pages of the site', () => (
      compileSite().then(pages => {
        expect(pages.length).to.be.above(0);
      })
    ));
  });

  describe('compileRoutes', () => {
    const A = () => <div>A</div>;
    const B = () => <div>B</div>;
    const routes = (
      <Router history={browserHistory}>
        <Route path="/hello" component={A} />
        <Route path="/hello/world" component={B} />
      </Router>
    );

    it('renders a routers pages', () => {
      return compileRoutes(routes).then(pages => {
        expect(pages.length).to.equal(2);

        expect(pages[0].path).to.equal('hello/index.html');
        expect(pages[0].body).to.match(/<div[^>]+>A<\/div>/);

        expect(pages[1].path).to.equal('hello/world/index.html');
        expect(pages[1].body).to.match(/<div[^>]+>B<\/div>/);
      });
    });
  });
});
