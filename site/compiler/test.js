import React from 'react';
import { compileSite, compileRoutes } from '.';

describe('site/compiler', () => {
  describe('compileSite', () => {
    it('renders all the pages of the site', () => {
      const pages = compileSite();
      expect(pages.length).to.be.above(0);
    });
  });

  describe('compileRoutes', () => {
    const A = () => <div>A</div>;
    const B = () => <div>B</div>;
    const C = () => <div>C</div>;
    const routes = [
      {
        key: 'home',
        route: '',
        filePath: 'index.html',
        component: () => <A />,
      },
      {
        key: 'notFound',
        route: '404',
        filePath: '404/index.html',
        component: () => <B />,
      },
      {
        key: 'about',
        route: 'site/about',
        filePath: 'site/about/index.html',
        component: () => <C />,
      },
    ];

    it('renders a routers pages', () => {
      const pages = compileRoutes(routes);
      expect(pages.length).to.equal(3);

      expect(pages[0].path).to.equal('index.html');
      expect(pages[0].body).to.match(/<div[^>]+>A<\/div>/);

      expect(pages[1].path).to.equal('404/index.html');
      expect(pages[1].body).to.match(/<div[^>]+>B<\/div>/);

      expect(pages[2].path).to.equal('site/about/index.html');
      expect(pages[2].body).to.match(/<div[^>]+>C<\/div>/);
    });
  });
});
