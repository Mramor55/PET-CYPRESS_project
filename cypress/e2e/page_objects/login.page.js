class LoginPage {
     get emailInput() {return cy.get('[name="email"]')};
     get passwordInput() {return cy.get('[type="password"]')};
     get loginButton() {return cy.contains('Login')};
     get nameInput() {return cy.get('[name="username"]')};
     get surnameInput() {return cy.get('[name="user_surname"]')};
     get emailInput() {return cy.get('[name="email"]')};
     get passwordInput() {return cy.get('[name="password"]')};
     get checkpasswordInput() {return cy.get('[name="check_password"]')};
     
    login(email, password) {
      this.emailInput.type(email);
      this.passwordInput.type(password);
      this.loginButton.click();
    }
}

export default new LoginPage();