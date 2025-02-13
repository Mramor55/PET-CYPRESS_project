class RegistrationPage {
    get firstNameInput() {return cy.get('[name="firstName"]')};
    get lastNameInput() {return cy.get('[name="lastName"]')};
    get emailInput() {return cy.get('[name="email"]')};
    get passwordInput() {return cy.get('[name="password"]')};
    get submitButton () {return cy.get('[type="submit"]')};
}
export default new RegistrationPage();