import dashboardPage from "../page_objects/dashboard.page";
import userPage from "../page_objects/user.page";
import testData from "../../fixtures/testData.json";

describe("Admin", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.loginAPI();
    cy.visit("dashboard/user/profile");
  });
  
  it("Should register a new user and delete user as admin", () => {
    dashboardPage.createButton.click();
    userPage.nameInput.type(testData.nameUser);
    userPage.surnameInput.type(testData.surnameUser);
    userPage.emailInput.type(testData.userEmail);
    userPage.passwordInput.type(testData.userPassword);
    userPage.checkpasswordInput.type(testData.userPassword);
    userPage.confirmButton.click();
 
    dashboardPage.searchUserInput.type(testData.surnameUser);
    dashboardPage.checkboxInput.click();
    dashboardPage.deleteUserLabel.click();
    cy.reload();
    dashboardPage.listButton.click();
    dashboardPage.searchUserInput.type(testData.surnameUser);
    cy.contains("No Data");
  }); 
});
