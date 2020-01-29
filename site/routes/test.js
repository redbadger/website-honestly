import createStateNavigator from '.';

import TrailingSlashHistoryManager from './history-manager';

describe('Routes', () => {
  describe('Home Page', () => {
    it('should accept contact us boolean', () => {
      const stateNavigator = createStateNavigator();
      const url = stateNavigator.getNavigationLink('homePage', { contactUs: true });
      expect(url).toEqual('/?contactUs=true');
    });

    it('should turn contact us into hash', () => {
      const stateNavigator = createStateNavigator();
      const href = stateNavigator.historyManager.getHref('/?contactUs=true');
      expect(href).toEqual('/#contactUs');
    });

    it('should turn hash into contact us', () => {
      const stateNavigator = createStateNavigator();
      const anchor = {
        pathname: '/',
        search: '',
        hash: '#contactUs',
      };
      const url = stateNavigator.historyManager.getUrl(anchor);
      expect(url).toEqual('/?contactUs=true');
    });
  });

  describe('HistoryManager', () => {
    it('should add a trailing slash to urls without one', () => {
      const url = '/test';
      const historyManager = new TrailingSlashHistoryManager();
      expect(historyManager.getHref(url)).toEqual(url + '/');
    });

    it('should not add a trailing slash to urls with one', () => {
      const url = '/test/';
      const historyManager = new TrailingSlashHistoryManager();
      expect(historyManager.getHref(url)).toEqual(url);
    });
  });
});
