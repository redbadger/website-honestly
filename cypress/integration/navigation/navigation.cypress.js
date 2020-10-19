import { acceptCookiePolicy } from '../shared-utils/utils';

beforeEach(() => {
  cy.visit('/');
});

describe('A user can navigate through the entire Website-honestly', () => {
  it('allows a user to navigate on desktop', () => {
    // set the viewport to desktop
    cy.viewport('macbook-15');
    acceptCookiePolicy();
    // sub menus should not be visible when not on their parent page
    cy.get('[data-cy=experienceUsLink]').should('not.be.visible');
    cy.get('[data-cy=technologyLink]').should('not.be.visible');
    cy.get('[data-cy=ourWorkLink]').should('not.be.visible');
    cy.get('[data-cy=meetOurTeamLink]').should('not.be.visible');

    // check that user is successfully navigated to each page
    cy.get('[data-cy=whatWeDoLink]').click();
    cy.url().should('contain', '/what-we-do');
    // sub menu of what we do page should now be visible
    cy.get('[data-cy=experienceUsLink]')
      .should('be.visible')
      .click();
    cy.url().should('contain', '/experience-us');
    cy.get('[data-cy=whatWeDoLink]').click();

    cy.get('[data-cy=technologyLink]')
      .should('be.visible')
      .click();
    cy.url().should('contain', '/technology');
    cy.get('[data-cy=whatWeDoLink]').click();

    cy.get('[data-cy=ourWorkLink]')
      .should('be.visible')
      .click();
    cy.url().should('contain', '/our-work');

    cy.get('[data-cy=aboutUsLink]').click();
    cy.url().should('contain', '/about-us');
    // sub menu of about us page should now be visible
    cy.get('[data-cy=meetOurTeamLink]').should('be.visible');

    cy.get('[data-cy=eventsLink]').click();
    cy.url().should('contain', '/events');
    cy.get('[data-cy=joinUsLink]').click();
    cy.url().should('contain', '/jobs');
    // check that cookie banner has not returned
    cy.get('#hs-eu-confirmation-button').should('not.be.visible');
  });
});
