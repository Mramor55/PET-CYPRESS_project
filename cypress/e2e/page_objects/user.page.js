class UserPage {
    get nameInput() {return cy.get('[name="username"]')};
    get surnameInput() {return cy.get('[name="user_surname"]')};
    get emailInput() {return cy.get('[name="email"]')};
    get passwordInput() {return cy.get('[name="password"]')};
    get checkpasswordInput() {return cy.get('[name="check_password"]')};
    get confirmButton() {return cy.contains('Create User')};
 }
 export default new UserPage();  