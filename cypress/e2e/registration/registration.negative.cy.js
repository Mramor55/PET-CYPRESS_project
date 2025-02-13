import registrationPage from "../page_objects/registration.page";
import homePage from "../page_objects/home.page";
import userDetails from '../../fixtures/userDetails.json'

describe("Registration", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  
  it("Should not register with an already existing email account", () => {
    homePage.registerButton.click();
    registrationPage.firstNameInput.type("m");
    registrationPage.lastNameInput.type("mo");
    registrationPage.emailInput.type(userDetails.email);
    registrationPage.passwordInput.type(userDetails.password);
    registrationPage.submitButton.click();
    cy.contains('Input data validation failed');
  });

  it("Should not register without filling in required fields", () => {
    homePage.registerButton.click();
    registrationPage.firstNameInput.type("l");
    registrationPage.lastNameInput.type("k");
    registrationPage.emailInput.type("p");
    registrationPage.passwordInput.type(userDetails.password);
    registrationPage.submitButton.click();
    cy.contains('Email must be a valid email address')
  });
});
 