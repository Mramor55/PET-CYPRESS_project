
describe("login", () => {
    beforeEach(() => {
      cy.visit("/");
    });
})
it('should log in successfully with valid credentials and make correct API call', () => {
    cy.intercept('POST', '/api/auth/login').as('loginRequest');
    
    LoginPage.enterUsername('validUser');
    LoginPage.enterPassword('validPassword');
    LoginPage.submit();
    
    // Wait for the login API call and check the response
    cy.wait('@loginRequest').its('response.statusCode').should('equal', 200);
    
    // Verify successful login
    LoginPage.verifyLoginSuccess();
  });
  verifyLoginSuccess() {
    cy.url().should('include', '/dashboard'); // Verify redirection to the dashboard
    cy.get('.welcome-message').should('contain', 'Welcome'); // Verify welcome message or other success indicator
  }
