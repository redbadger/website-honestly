describe('The Red Badger Jobs page', () => {
  beforeEach(() => {
    cy.server();
    cy.route('GET', '/state.json', 'fixture:state-jobs.json');
    cy.visit('http://localhost:8080/jobs');
  });

  // example of a stubbed test
  it('loads the page successfully', () => {
    cy.get('h1').contains('Join us');
  });

  it('returns the correct detail for an available job', () => {
    cy.contains('[data-cy=job-section]', 'Engineering').should('exist');
    cy.contains('[data-cy=job-title]', 'Technical Lead').should('exist');
  });

  it('should only show the job description when the user taps to expand', () => {
    cy.get('[data-cy=job-description]').should('not.be.visible');
    cy.get('[data-cy=arrow]').click();
    cy.get('[data-cy=job-description]').should('be.visible');
  });
});

describe('a busy job page', () => {
  it('can display all roles when there are many on the site', () => {
    cy.server();
    cy.route('GET', '/state.json', 'fixture:many-jobs.json');
    cy.visit('http://localhost:8080/jobs');
    cy.get('[data-cy=job-title]').each($title => {
      cy.wrap($title).should('be.visible');
    });
  });
});
