import { faker } from "@faker-js/faker";
import homePage from "../page_objects/home.page";
import registrationPage from "../page_objects/registration.page";
import dashboardPage from "../page_objects/dashboard.page";
import loginPage from "../page_objects/login.page";

let username = faker.internet.userName();
let password = faker.internet.password();
let email = faker.internet.exampleEmail();

describe("Registration", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  
  it("Should register a new user account", () => {
    homePage.registerButton.click();
    registrationPage.firstNameInput.type(username);
    registrationPage.lastNameInput.type(username);
    registrationPage.emailInput.type(email);
    registrationPage.passwordInput.type(password);   
    registrationPage.submitButton.click();

    cy.fixture("testData.json").then((data) => {
      dashboardPage.roleLabel.should("have.text", data.roleLabel);
    });
    dashboardPage.fullNameLabel.should("include.text", username);

    dashboardPage.personButton.click();
    cy.contains("Logout").click();
    cy.contains("Login").click();
    loginPage.login(email, password);
    cy.fixture("testData.json").then((data) => {
      dashboardPage.roleLabel.should("have.text", data.roleLabel);
    });
    dashboardPage.fullNameLabel.should("include.text", username);
  });
});
