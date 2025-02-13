class DasboardPage {
    get roleLabel() {return cy.get('a p')};
    get personButton() {return cy.get('button [data-testid="PersonIcon"]')};
    get fullNameLabel() {return cy.get('h6')};
    get userButton() {return cy.get ('[role="button"').eq(0)};
    get createButton() {return cy.get ('[role="button"]').contains('create')}
    get listButton() {return cy.get ('[role="button"]').eq(1)};
    get searchUserInput() {return cy.get ('input[placeholder="Search user..."]')};
    get checkboxInput() {return cy.get('td').eq(5).find('button')};
    get deleteUserLabel() {return cy.contains("Delete")};
    get realEstateButton() {return cy.get ('[role="button"]').eq(2)};
}
export default new DasboardPage();