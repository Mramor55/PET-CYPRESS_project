import dashboardPage from "../page_objects/dashboard.page";
import testData from "../../fixtures/testData.json";

describe("Login", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.loginUser();
    cy.visit("dashboard/user/profile");
  });

  it("Should login in with existing account as an user", () => {
    dashboardPage.fullNameLabel.should("have.text", testData.fullName);
  });

  it("Should user log out from exiting account", () => {
    dashboardPage.personButton.click();
    cy.contains("Logout").click();
    cy.url().should("include", "auth/login");
  });
});
