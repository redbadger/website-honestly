import { acceptCookiePolicy } from '../shared-utils/utils';

describe('The Red Badger Homepage', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('displays the correct header slogan', () => {
    cy.get('h1').contains('Let’s make things better');
  });

  it('contains the expected menu items', () => {
    cy.get('header').contains('What we do');
    cy.get('header').contains('About us');
    cy.get('header').contains('Blog');
    cy.get('header').contains('Events');
    cy.get('header').contains('Jobs');
  });

  it('contains the Red Badger logo', () => {
    cy.get('[data-cy="redBadgerLogo"]').should('be.visible');
  });

  it('contains all slices', () => {
    cy.get('[data-cy=top-slice]').should('be.visible');
    cy.get('[data-cy=gold-coins-slice]').should('be.visible');
    cy.get('[data-cy=case-study-slice]').should('be.visible');
    cy.get('[data-cy=sharethyme-slice]').should('be.visible');
    cy.get('[data-cy=testimonial-slice]').should('be.visible');
    cy.get('[data-cy=tech-slice]').should('be.visible');
    cy.get('[data-cy=contact-us-slice]').should('be.visible');
    cy.get('[data-cy=newsletter-signup-slice]').should('be.visible');
    cy.get('[data-cy=awards-slice]').should('be.visible');
  });

  it('allows the user to accept the cookie policy and stores the acceptance', () => {
    Cypress.Cookies.debug(true);
    // check cookie doesn't exist on first load
    cy.getCookie('__hs_opt_out').should('not.exist');

    cy.get('#hs-eu-confirmation-button')
      .should('be.visible')
      .click();
    // check for existence and value of cookie
    cy.getCookie('__hs_opt_out').should('have.property', 'value', 'no');
    cy.get('#hs-eu-confirmation-button').should('not.be.visible');

    // check the cookie banner is still not present when navigating to new page
    cy.get('header')
      .contains('What we do')
      .click();
    cy.get('#hs-eu-confirmation-button').should('not.be.visible');
  });

  it('hides menu items when accessed on a mobile device', () => {
    cy.viewport('iphone-x');
    cy.get('header')
      .contains('What we do')
      .should('not.be.visible');
    cy.get('header')
      .contains('About us')
      .should('not.be.visible');
    cy.get('header')
      .contains('Blog')
      .should('not.be.visible');
    cy.get('header')
      .contains('Events')
      .should('not.be.visible');
    cy.get('header')
      .contains('Jobs')
      .should('not.be.visible');
    cy.viewport(1200, 800);
  });

  it('shows a burger menu when accessed on a mobile device', () => {
    acceptCookiePolicy();
    cy.viewport('iphone-x');
    cy.get('[data-cy=burger-menu-trigger]')
      .should('exist')
      .and('be.visible');
  });

  it('contains a sharethyme logo', () => {
    cy.get('.style__shareThymeLogo___2Dvhz')
      .should('exist')
      .and('be.visible');
  });

  it('contains a link to sign-up for badger news', () => {
    cy.get('[data-cy=email-signup')
      .should('have.prop', 'href')
      .and('contain', 'https://cta-redirect.hubspot.com/cta/redirect/');
  });

  it('contains a link to sign-up for badger news', () => {
    cy.get('[data-cy=email-link')
      .should('have.prop', 'href')
      .and('contain', 'mailto:hello@red-badger.com');
  });

  // it('contains a link to our case studies', () => {
  //   cy.get('[data-cy=ourWorkButton]')
  //   .should('have.attr', 'href').and('include', 'contact')
  // });
});
