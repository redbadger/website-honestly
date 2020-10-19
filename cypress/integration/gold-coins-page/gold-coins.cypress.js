import { acceptCookiePolicy } from '../shared-utils/utils';

describe('The Gold Coins campaign page', () => {
  beforeEach(() => {
    cy.visit('/what-we-do/experience-us/');
    acceptCookiePolicy();
  });

  it('loads successfully', () => {
    cy.get('h1').contains('How long have you got?');
  });

  it('allows a user to book', () => {
    cy.server();
    cy.route('POST', '/submissions/**').as('submission');

    const name = 'Test McTestface';
    const email = 'test@test.com';
    const jobTitle = 'Tester';
    const companyName = 'Red Badger';
    const phoneNumber = '07123456789';

    cy.get('[data-cy="goldCoinBookNowButton"]')
      .first()
      .click();
    cy.get('[data-cy="pageTitle"]');
    cy.get('#firstname-text').type(name);
    cy.get('#email-text').type(email);
    cy.get('#jobtitle-text').type(jobTitle);
    cy.get('#company-text').type(companyName);
    cy.get('#phone-text').type(phoneNumber);
    cy.get('[type="submit"]').should('have.attr', 'disabled');
    cy.get('#form-legal-consent').click();
    cy.get('[type="submit"]').should('not.have.attr', 'disabled');
    cy.get('[type="submit"]').click();
    cy.wait('@submission');

    // assert that the body of the request matches the data passed in
    cy.get('@submission')
      .its('request.body.fields')
      .should('eql', [
        {
          name: 'firstname',
          value: name,
        },
        {
          name: 'email',
          value: email,
        },
        {
          name: 'jobtitle',
          value: jobTitle,
        },
        {
          name: 'company',
          value: companyName,
        },
        {
          name: 'phone',
          value: phoneNumber,
        },
        {
          name: 'topic',
          value: 'Service mesh',
        },
      ]);
  });
});
