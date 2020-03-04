import { acceptCookiePolicy } from './utils';

describe('The Red Badger Events page', () => {
  beforeEach(() => {
    cy.server();
    cy.route('GET', '/state.json', 'fixture:state-events.json');
    cy.visit('http://localhost:8080/events');
    acceptCookiePolicy();
  });

  it('loads the events page correctly', () => {
    cy.get('h1').contains('Events');
    cy.matchImageSnapshot();
  });
});
