import React from 'react';
import { compileSite, compileRoutes, expandRoutes } from '.';

describe('site/compiler', () => {
  describe('compileSite', () => {
    it('renders all the pages of the site', () => {
      const pages = compileSite({ jobs: [], job: {} });
      expect(pages.length).to.be.above(0);
    });
  });

  describe('expandRoutes', () => {
    const A = () => <div>A</div>;
    const routes = [
      {
        title: 'Home',
        key: 'home',
        route: '',
        filePath: 'index.html',
        component: () => <A />,
      },
      {
        title: props => `Dynamic Page ${props}`,
        key: 'dynamic',
        route: 'dynamic/{slug}',
        filePath: 'dynamic/{slug}/index.html',
        component: () => <A />,
        gen: ({ dynamic }) => Object.keys(dynamic),
        stateToProps: ({ dynamic }, slug) => dynamic[slug],
      },
    ];

    const expanded = expandRoutes(routes, { dynamic: { A: 'A!', B: 'B!' } });

    it('leaves static routes as-is', () => {
      expect(expanded[0].title).to.equal(routes[0].title);
      expect(expanded[0].key).to.equal(routes[0].key);
      expect(expanded[0].component).to.equal(routes[0].component);
    });

    it('expands dynamic routes', () => {
      expect(expanded[1].title).to.equal('Dynamic Page A!');
      expect(expanded[1].route).to.equal('dynamic/A');
      expect(expanded[1].filePath).to.equal('dynamic/A/index.html');

      expect(expanded[2].title).to.equal('Dynamic Page B!');
      expect(expanded[2].route).to.equal('dynamic/B');
      expect(expanded[2].filePath).to.equal('dynamic/B/index.html');
    });

    it('computes props from stateToProps', () => {
      expect(expanded[0].props).to.equal(undefined);
      expect(expanded[1].props).to.equal('A!');
      expect(expanded[2].props).to.equal('B!');
    });
  });

  describe('compileRoutes', () => {
    const A = () => <div>A</div>;
    const B = () => <div>B</div>;
    const C = () => <div>C</div>;
    const routes = [
      {
        title: 'Home',
        key: 'home',
        route: '',
        filePath: 'index.html',
        component: () => <A />,
      },
      {
        title: 'Not Found',
        key: 'notFound',
        route: '404',
        filePath: '404/index.html',
        component: () => <B />,
      },
      {
        title: () => 'About',
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
