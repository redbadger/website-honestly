import createStateNavigator from '.';

describe('Routes', () => {
  describe('Home Page', () => {
    it('should accept contact us boolean', () => {
      const stateNavigator = createStateNavigator();
      const url = stateNavigator.getNavigationLink('homePage', { contactUs: true });
      expect(url).to.equal('/?contactUs=true');
    });

    it('should turn contact us into hash', () => {
      const stateNavigator = createStateNavigator();
      const href = stateNavigator.historyManager.getHref('/?contactUs=true');
      expect(href).to.equal('/#contactUs');
    });

    it('should turn hash into contact us', () => {
      const stateNavigator = createStateNavigator();
      const anchor = {
        pathname: '/',
        search: '',
        hash: '#contactUs',
      };
      const url = stateNavigator.historyManager.getUrl(anchor);
      expect(url).to.equal('/?contactUs=true');
    });
  });
});
